// Backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const config = require("./config");
const User = require("./models/User");
const Notice = require("./models/Notice");

const app = express();

/* --------- Helpful startup logs (now with real interpolation) --------- */
console.log("ENV SUMMARY:", {
  NODE_ENV: config.nodeEnv,
  PORT: config.port,
  MONGO_URI: config.mongoUri,
  DB_NAME: config.dbName,
  FRONTEND_URL: config.frontendUrl,
});

/* ------------------------------- CORS --------------------------------- */
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
  })
);
app.options("*", cors());

/* ------------------------------- Parsers ------------------------------- */
app.use(express.json());

/* -------------------------- Auth middleware --------------------------- */
function authenticateToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded; // { id, username, role }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

function isAdmin(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}

/* -------------------------------- Routes ------------------------------- */
// Health
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Register
app.post("/api/register", async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
      return res
        .status(400)
        .json({ message: "username, email, password, role are required" });
    }

    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashed, role });
    await user.save();
    return res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    if (err && err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Email or username already taken" });
    }
    next(err);
  }
});

// Login
app.post("/api/auth/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn || "1d" }
    );

    return res.json({
      message: "Login successful",
      token,
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
});

// Me
app.get("/api/user", authenticateToken, (req, res) => {
  return res.json({
    loggedIn: true,
    username: req.user.username,
    role: req.user.role,
  });
});

// Notices CRUD
app.get("/api/notices", async (_req, res, next) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    return res.json(notices);
  } catch (err) {
    next(err);
  }
});

app.post("/api/notices", authenticateToken, isAdmin, async (req, res, next) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    return res.status(201).json(notice);
  } catch (err) {
    next(err);
  }
});

app.put(
  "/api/notices/:id",
  authenticateToken,
  isAdmin,
  async (req, res, next) => {
    try {
      const updated = await Notice.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updated)
        return res.status(404).json({ message: "Notice not found" });
      return res.json(updated);
    } catch (err) {
      next(err);
    }
  }
);

app.delete(
  "/api/notices/:id",
  authenticateToken,
  isAdmin,
  async (req, res, next) => {
    try {
      const deleted = await Notice.findByIdAndDelete(req.params.id);
      if (!deleted)
        return res.status(404).json({ message: "Notice not found" });
      return res.json({ message: "Notice deleted" });
    } catch (err) {
      next(err);
    }
  }
);

/* ------------------------- Global error handler ------------------------ */
app.use((err, _req, res, _next) => {
  console.error("💥 Error:", err);
  const status = err.status || 500;
  const payload =
    config.nodeEnv === "development"
      ? {
          message: err.message || "Server error",
          name: err.name,
          stack: err.stack,
        }
      : { message: "Server error" };
  res.status(status).json(payload);
});

/* --------------------- Start only after Mongo OK ---------------------- */
mongoose.set("strictQuery", true);

async function start() {
  try {
    await mongoose.connect(
      // IMPORTANT: prefer IPv4 127.0.0.1 instead of localhost on Windows
      config.mongoUri || "mongodb://127.0.0.1:27017",
      { dbName: config.dbName, serverSelectionTimeoutMS: 10_000 }
    );
    console.log("✅ Connected to MongoDB");

    app.listen(config.port, () => {
      console.log(
        `🚀 API on http://localhost:${config.port} (env: ${config.nodeEnv})`
      );
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err?.message || err);
    process.exit(1);
  }
}

start();
