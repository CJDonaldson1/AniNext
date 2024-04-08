require('dotenv').config()
const twilio = require('twilio')

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendSMS = async (to, body) => {
  try {
    const message = await twilioClient.messages.create({
      body: body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    })

    console.log('SMS sent successfully:', message.sid)
    return { success: true, sid: message.sid }
  } catch (error) {
    console.error('Failed to send SMS:', error)
    return { success: false, error: error.message }
  }
}

module.exports = { sendSMS }
