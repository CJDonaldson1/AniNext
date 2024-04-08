import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ReviewFormPage.css'

const ReviewPage = () => {
    const [animeTitle, setAnimeTitle] = useState('')
    const [numberOfStars, setNumberOfStars] = useState(5)
    const [comment, setComment] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        // Fetch reviews
        axios.get('http://localhost:3001/api/reviews')
            .then(response => {
               
                console.log(response.data);
            })
            .catch(error => console.error('Failed to fetch reviews:', error))

        axios.get('http://localhost:3001/api/anime')
            .then(response => {
                setAnimes(response.data)
            })
            .catch(error => console.error('Failed to fetch animes:', error))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
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
                    <label htmlFor="animeTitle">Anime Title</label>
                    <select
                        id="animeTitle"
                        value={animeTitle}
                        onChange={(e) => setAnimeTitle(e.target.value)}
                        required
                    >
                        <option value="">Select Anime</option>
                        {animes.map((anime, index) => (
                            <option key={index} value={anime.title}>{anime.title}</option>
                        ))}
                    </select>
                </div>

                <div className="input-2 text-wrapper">
                    <label htmlFor="numberOfStars">Number of Stars (1-5)</label>
                    <input
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
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="checkbox text-wrapper">
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <label>I accept the terms and conditions</label>
                </div>

                <button type="submit" className="submit-btn" disabled={!termsAccepted}>Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewPage


