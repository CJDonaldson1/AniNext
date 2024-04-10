require('dotenv').config()
const twilio = require('twilio')

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

const sendSMS = async (to, message) => {
  try {
    const smsResponse = await twilioClient.messages.create({
      body: message, // Use the message directly
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    })
    console.log('SMS sent successfully:', smsResponse.sid)
    return { success: true, sid: smsResponse.sid }
  } catch (error) {
    console.error('Failed to send SMS:', error)
    return { success: false, error: error.message }
  }
}


module.exports = { sendSMS }
