import React, { useState, useEffect } from "react"
import "./UserProfilePage.css"

export const ProfilePage = () => {
    const [savedAnimes, setSavedAnimes] = useState(JSON.parse(localStorage.getItem("savedAnimes")) || [])
    const [phoneNumber, setPhoneNumber] = useState("")

    // Function to calculate the next episode date
    const getNextEpisodeDate = (anime) => {
        const today = new Date()
        const airingDate = new Date(anime.airingDate)
        let nextEpisodeDate

        if (today >= airingDate) {
            const weeksSinceAiring = Math.floor((today - airingDate) / (7 * 24 * 60 * 60 * 1000))
            nextEpisodeDate = new Date(airingDate.setDate(airingDate.getDate() + 7 * (weeksSinceAiring + 1)))
        } else {
            nextEpisodeDate = airingDate;
        }

        return nextEpisodeDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
    const handleRemoveAnime = (animeToRemove) => {
      const updatedSavedAnimes = savedAnimes.filter(anime => anime.title !== animeToRemove.title)
      setSavedAnimes(updatedSavedAnimes);
      localStorage.setItem("savedAnimes", JSON.stringify(updatedSavedAnimes))
  }
  

    return (
        <div className="profile-page">
            {/* Profile page content */}
            {savedAnimes.map((anime, index) => (
                <div key={index} className="anime-card">
                    <img src={anime.image} alt={`Cover for ${anime.title}`} />
                    <div className="anime-details">
                        <h3>{anime.title}</h3>
                        <p>{anime.genres.join(', ')}</p>
                        <p>Next Episode: {getNextEpisodeDate(anime)}</p>
                        <button onClick={() => handleRemoveAnime(anime)}>Remove from List</button>

                    </div>
                </div>
            ))}
            <div className="reminder-section">
                {/* Reminder section for setting reminders */}
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button onClick={() => { /* Logic for sending reminders */ }}>
                    Set Reminders
                </button>
            </div>
        </div>
    )
}

export default ProfilePage

