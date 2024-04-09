const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const SmsLog = require('./models/Sms')

const animeController = require('./controllers/animeController')
const userController = require('./controllers/userController')
const reviewController = require('./controllers/reviewController')
const { sendSMS } = require('./smsService')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

// Route to test server is running
app.get('/', (req, res) => res.send('Welcome to AniNext API!'))

// User Routes
app.get('/api/users', userController.getAllUsers)
app.get('/api/users/:id', userController.getUserById)
app.post('/api/users', userController.createUser)
app.put('/api/users/:id', userController.updateUser)
app.delete('/api/users/:id', userController.deleteUser)

// Login Route for User


// Anime Routes
app.get('/api/anime', animeController.getAllAnime)
app.get('/api/anime/:id', animeController.getAnimeById)
app.post('/api/anime', animeController.createAnime)
app.put('/api/anime/:id', animeController.updateAnime)
app.delete('/api/anime/:id', animeController.deleteAnime)

// Review Routes
app.get('/api/reviews', reviewController.getAllReviews)
app.get('/api/reviews/:id', reviewController.getReviewById)
app.post('/api/reviews', reviewController.createReview)
app.put('/api/reviews/:id', reviewController.updateReview)
app.delete('/api/reviews/:id', reviewController.deleteReview)

//this is the for the sms routes
app.get('/api/reminders', async (req, res) => {
    try {
        const reminders = await Reminder.find()
        res.status(200).json({ data: reminders })
    } catch (error) {
        res.status(500).json({ message: "Failed to get reminders.", error: error.message })
    }
})
app.post('/api/reminders', async (req, res) => {
    const { phoneNumber, message } = req.body
  
    try {
      const smsResponse = await sendSMS(phoneNumber, message)
      if (smsResponse.success) {
        // Save the log of the SMS being sent
        const newSmsLog = new SmsLog({
          to: phoneNumber,
          message: message,
          sid: smsResponse.sid,
          status: 'sent'
        });
        await newSmsLog.save()
  
        res.status(200).json({ message: "Reminder sent successfully!", data: smsResponse })
      } else {
        throw new Error(smsResponse.error)
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to send reminder.", error: error.message })
    }
  })

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
