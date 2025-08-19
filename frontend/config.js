// config.js
require("dotenv").config();

module.exports = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || "development",

  mongoUri: process.env.MONGO_URI,
  dbName: process.env.DB_NAME,

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    cookieExpire: parseInt(process.env.COOKIE_EXPIRE),
  },

  corsOrigin: process.env.CORS_ORIGIN,

  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS),
    max: parseInt(process.env.RATE_LIMIT_MAX),
  },

  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
    fromEmail: process.env.FROM_EMAIL,
    fromName: process.env.FROM_NAME,
  },

  frontendUrl: process.env.FRONTEND_URL,
  loginRedirect: process.env.LOGIN_REDIRECT,
  logoutRedirect: process.env.LOGOUT_REDIRECT,

  admin: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    username: process.env.ADMIN_USERNAME,
  },
};
