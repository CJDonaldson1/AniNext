const db = require('../db')
const Review = require('../models/review')
const mongoose = require('mongoose')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createReviews = async () => {
    const reviewsData = [
        {
            user: new mongoose.Types.ObjectId('660ea4e37ff7a564e6b4d8ff'), 
            anime: new mongoose.Types.ObjectId('660ea4e928ae1d723c6cd45f'), 
            content: 'Absolutely fantastic series with deep characters and an engaging plot.',
            rating: 5
        },
        {
            user: new mongoose.Types.ObjectId('660ea4e37ff7a564e6b4d901'), 
            anime: new mongoose.Types.ObjectId('660ea4e928ae1d723c6cd461'), 
            content: 'Good animation and soundtracks, but the story pacing felt a bit off at times.',
            rating: 4
        }
    ]

    await Review.deleteMany()
    await Review.insertMany(reviewsData)
    console.log('Successfully seeded reviews into the database.')
}

const run = async () => {
    await createReviews()
    db.close()
}

run()
