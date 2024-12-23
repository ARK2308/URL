const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  customAlias: { type: String },
  topic: { type: String },
  createdAt: { type: Date, default: Date.now },
  analytics: {
    totalClicks: { type: Number, default: 0 },
    uniqueClicks: { type: Number, default: 0 },
    clicksByDate: [{ date: Date, clicks: Number }],
    osType: [{ osName: String, uniqueClicks: Number, uniqueUsers: Number }],
    deviceType: [{ deviceName: String, uniqueClicks: Number, uniqueUsers: Number }]
  }
});

module.exports = mongoose.model('URL', urlSchema);
