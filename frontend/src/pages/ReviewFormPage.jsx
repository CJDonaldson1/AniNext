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
        const fetchAnimes = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/api/anime')
                setAnimes(data);
                console.log('Animes:', data)
            } catch (error) {
                console.error('Failed to fetch animes:', error)
            }
        }

        const fetchReviews = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/api/reviews')
                setReviews(data);
                console.log('Reviews:', data)
            } catch (error) {
                console.error('Failed to fetch reviews:', error)
            }
        };

        fetchAnimes().then(fetchReviews)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = { anime: selectedAnimeId, rating, content }

        try {
            await axios.post('http://localhost:3001/api/reviews', reviewData)
            alert('Review submitted successfully!')
            // Optionally reset form fields here
            setContent('');
            setRating(5);
            setSelectedAnimeId('')
        } catch (error) {
            console.error('Failed to submit review:', error);
            alert('Failed to submit the review, please try again.')
        }
    }

    return (
        <div className="review-page">
            <form onSubmit={handleSubmit} className="container">
                <div className="title">Leave a Review</div>
                
                <div className="input text-wrapper">
                    <label htmlFor="animeTitle">Anime Title</label>
                    <select
                        id="animeTitle"
                        value={selectedAnimeId}
                        onChange={(e) => setSelectedAnimeId(e.target.value)}
                        required
                    >
                        <option value="">Select Anime</option>
                        {animes.map((anime) => (
                            <option key={anime._id} value={anime._id}>{anime.title}</option>
                        ))}
                    </select>
                </div>

                <div className="input-2 text-wrapper">
                    <label htmlFor="rating">Rating (1-5)</label>
                    <input
                        id="rating"
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                </div>

                <div className="input-3 text-wrapper">
                    <label htmlFor="content">Review Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Review</button>
            </form>

            {/* Display reviews */}
            <div className="reviews-container">
                <h2>Reviews</h2>
                {reviews.map((review) => (
  <div key={review._id}>
    <h3>{review.anime.title}</h3>
    <p>Rating: {review.rating}</p>
    <p>{review.content}</p>
  </div>
))}
            </div>
        </div>
    )
}

export default ReviewPage







