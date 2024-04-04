const Review = require('../models/review')

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user').populate('anime')
        res.json(reviews)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id).populate('user').populate('anime')
        if (review) {
            res.json(review);
        } else {
            res.status(404).send('Review not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body)
        await newReview.save()
        res.status(201).json(newReview)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateReview = async (req, res) => {
    try {
        const { id } = req.params
        const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true }).populate('user').populate('anime')
        if (updatedReview) {
            res.json(updatedReview)
        } else {
            res.status(404).send('Review not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id)
        if (deletedReview) {
            res.send('Review deleted');
        } else {
            res.status(404).send('Review not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}