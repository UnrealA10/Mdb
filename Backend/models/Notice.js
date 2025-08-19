const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    tag: {
      type: String,
      enum: ["Info", "Update", "Event", "Alert"],
      default: "Info",
    },
    description: String,
    href: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);
