const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const bcrypt = require('bcryptjs')
    
    const users = [
        {
            username: 'johnDoe',
            email: 'john@example.com',
            passwordHash: bcrypt.hashSync('password123', 10), 
            savedAnimes: [],
            reviews: [],
            reminders: []
        },
        {
            username: 'janeDoe',
            email: 'jane@example.com',
            passwordHash: bcrypt.hashSync('mySecretPass', 10), 
            savedAnimes: [],
            reviews: [],
            reminders: []
        },
        {
            username: 'alexSmith',
            email: 'alex@example.com',
            passwordHash: bcrypt.hashSync('anotherPass', 10),
            savedAnimes: [],
            reviews: [],
            reminders: []
        }
    ]
    await User.deleteMany()
    await User.insertMany(users)
    console.log("Users have been created successfully.")
}

const run = async () => {
    await main()
    db.close()
}

run()