const mongoose = require('mongoose')
const SmsLog = require('./models/Sms')

const mongoURI = 'mongodb://127.0.0.1:27017/AnimeProjectDatabase'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
const printLogs = async () => {
  try {
    const logs = await SmsLog.find()
    console.log(logs)
  } catch (err) {
    console.error('Error fetching logs:', err)
  } finally {
 
    mongoose.disconnect()
  }
}

printLogs()

