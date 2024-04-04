const User = require('../models/user')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            res.json(user)
        } else {
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedUser) {
            res.json(updatedUser)
        } else {
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id)
        if (deletedUser) {
            res.send('User deleted');
        } else {
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}