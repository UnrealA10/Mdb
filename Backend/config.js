// backend/config.js
require("dotenv").config();

const fallback = {
  MONGO_URI: "mongodb://127.0.0.1:27017", // safe default
  DB_NAME: "schoolDB",
  JWT_EXPIRES_IN: "1d",
  COOKIE_EXPIRE: "1",
  CORS_ORIGIN: "http://localhost:5173,http://127.0.0.1:5173",
  PORT: "8080",
};

module.exports = {
  port: process.env.PORT || fallback.PORT,
  nodeEnv: process.env.NODE_ENV || "development",

  mongoUri: process.env.MONGO_URI || fallback.MONGO_URI,
  dbName: process.env.DB_NAME || fallback.DB_NAME,

  jwt: {
    secret: process.env.JWT_SECRET || "dev-secret-change-me",
    expiresIn: process.env.JWT_EXPIRES_IN || fallback.JWT_EXPIRES_IN,
    cookieExpire: parseInt(
      process.env.COOKIE_EXPIRE || fallback.COOKIE_EXPIRE,
      10
    ),
  },

  corsOrigin: process.env.CORS_ORIGIN || fallback.CORS_ORIGIN,

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || "120", 10),
  },

  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    fromEmail: process.env.FROM_EMAIL,
    fromName: process.env.FROM_NAME,
  },

  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  loginRedirect: process.env.LOGIN_REDIRECT || "/dashboard",
  logoutRedirect: process.env.LOGOUT_REDIRECT || "/login",

  admin: {
    email: process.env.ADMIN_EMAIL || "admin@example.com",
    password: process.env.ADMIN_PASSWORD || "Admin@123",
    username: process.env.ADMIN_USERNAME || "admin",
  },
};
