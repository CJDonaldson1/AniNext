import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ReviewPage = () => {
    const [animeTitle, setAnimeTitle] = useState('')
    const [numberOfStars, setNumberOfStars] = useState('')
    const [comment, setComment] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch reviews:', error)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = { animeTitle, numberOfStars, comment, termsAccepted }

        try {
            await axios.post('http://localhost:3001/api/reviews', reviewData)
            alert('Review submitted successfully!')
        } catch (error) {
            console.error('Failed to submit review:', error)
            alert('Failed to submit the review, please try again.')
        }
    }

    return (
        <div className="review-page">
            <form onSubmit={handleSubmit} className="container">
                
                <div className="title">Leave a Review</div>
                <div className="description">Your feedback is important to us!</div>
                
                <div className="input text-wrapper">
                    <label className="text" htmlFor="animeTitle">Anime Title</label>
                    <input
                        className="textfield"
                        id="animeTitle"
                        type="text"
                        value={animeTitle}
                        onChange={(e) => setAnimeTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="input-2 text-wrapper">
                    <label className="text" htmlFor="numberOfStars">Number of Stars (1-5)</label>
                    <input
                        className="textfield"
                        id="numberOfStars"
                        type="number"
                        value={numberOfStars}
                        onChange={(e) => setNumberOfStars(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                </div>

                <div className="input-3 text-wrapper">
                    <label className="text" htmlFor="comment">Comment</label>
                    <textarea
                        className="textfield"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="button primary">
                    <label className="title-2">
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        I accept the terms and conditions
                    </label>
                </div>

                <button type="submit" className="button primary" disabled={!termsAccepted}>
                    <span className="title-2">Submit Review</span>
                </button>
            </form>
        </div>
    )
}

export default ReviewPage