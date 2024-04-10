import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ReviewFormPage.css'

const ReviewPage = () => {
    const [selectedAnimeId, setSelectedAnimeId] = useState('')
    const [rating, setRating] = useState(5)
    const [content, setContent] = useState('')
    const [animes, setAnimes] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/anime')
            .then(response => setAnimes(response.data))
            .catch(error => console.error('Failed to fetch animes:', error))

        axios.get('http://localhost:3001/api/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error('Failed to fetch reviews:', error))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const reviewData = { anime: selectedAnimeId, rating, content }

        try {
            await axios.post('http://localhost:3001/api/reviews', reviewData)
            alert('Review submitted successfully!')
            setContent('')
            setRating(5)
            setSelectedAnimeId('')
            // Re-fetch reviews to include the new review
            axios.get('http://localhost:3001/api/reviews')
                .then(response => setReviews(response.data))
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
                    <label htmlFor="animeTitle">Anime Title</label>
                    <select id="animeTitle" value={selectedAnimeId} onChange={(e) => setSelectedAnimeId(e.target.value)} required className="textfield">
                        <option value="">Select Anime</option>
                        {animes.map((anime) => (
                            <option key={anime._id} value={anime._id}>{anime.title}</option>
                        ))}
                    </select>
                </div>
                <div className="input-2 text-wrapper">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input id="rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required className="textfield" />
                </div>
                <div className="input-3 text-wrapper">
                    <label htmlFor="content">Review Content</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required className="textfield"></textarea>
                </div>
                <button type="submit" className="button primary title-2">Submit Review</button>
            </form>
            {/* Display reviews in a grid or list layout */}
            <div className="section-2">
                <div className="list">
                    {reviews.map((review) => (
                        <div key={review._id} className="card">
                            <div className="user">
                                <div className="avatar avatar-2"></div>
                                <div className="frame">
                                    <div className="title-4">{review.anime ? review.anime.title : 'Unknown Anime'}</div>
                                    <div className="title-5">Rating: {review.rating}</div>
                                    <p className="p">{review.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReviewPage










