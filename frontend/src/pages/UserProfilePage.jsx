import React, { useState, useEffect } from "react"
import axios from "axios"
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
      nextEpisodeDate = airingDate
    }

    return nextEpisodeDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  const handleRemoveAnime = (animeToRemove) => {
    const updatedSavedAnimes = savedAnimes.filter(anime => anime.title !== animeToRemove.title)
    setSavedAnimes(updatedSavedAnimes)
    localStorage.setItem("savedAnimes", JSON.stringify(updatedSavedAnimes))
  }

  const handleSetReminders = async () => {
    if (!phoneNumber.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit phone number.')
      return
    }

    const reminders = savedAnimes.map(anime => {
      return `${anime.title} - Next episode airs on: ${getNextEpisodeDate(anime)}`
    }).join('\n')

    try {
      const response = await axios.post('http://localhost:3001/api/reminders', {
        phoneNumber,
        message: reminders
      })

      if (response.status === 200) {
        alert('Reminders set successfully!')
        
        setPhoneNumber('')
      } else {
        throw new Error('Failed to set reminders')
      }
    } catch (error) {
      alert('Failed to set reminders. Please try again.')
      console.error('Failed to set reminders:', error)
    }
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
        
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSetReminders}>Set Reminders</button>
      </div>
    </div>
  )
}

export default ProfilePage


