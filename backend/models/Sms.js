const mongoose = require('mongoose')

const smsLogSchema = new mongoose.Schema({
  sid: { type: String, required: true },
  to: { type: String, required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now }
})

const SmsLog = mongoose.model('SmsLog', smsLogSchema)

module.exports = SmsLog
