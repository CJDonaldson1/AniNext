const db = require('../db')
const Review = require('../models/review')
const mongoose = require('mongoose')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createReviews = async () => {
    const reviewsData = [
        {
            user: new mongoose.Types.ObjectId('660d5bf47d4a7cc1dee59187'), 
            anime: new mongoose.Types.ObjectId('660db78c0dc16164350f03d0'), 
            content: 'Absolutely fantastic series with deep characters and an engaging plot.',
            rating: 5
        },
        {
            user: new mongoose.Types.ObjectId('660d5bf47d4a7cc1dee59188'), 
            anime: new mongoose.Types.ObjectId('660db78c0dc16164350f03cd'), 
            content: 'Good animation and soundtracks, but the story pacing felt a bit off at times.',
            rating: 4
        }
    ]

    await Review.deleteMany(); 
    await Review.insertMany(reviewsData);
    console.log('Successfully seeded reviews into the database.')
}

const run = async () => {
    await createReviews()
    db.close()
}

run()
