import React, { useState, useEffect } from "react"
import axios from "axios"
import "./UserProfilePage.css"

export const ProfilePage = () => {
  const [savedAnimes, setSavedAnimes] = useState([])
  const [phoneNumber, setPhoneNumber] = useState('')

  // Load saved animes from local storage
  useEffect(() => {
    const loadedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || []
    setSavedAnimes(loadedAnimes)
  }, [])

  // Handle sending SMS reminders
  const handleSendReminders = async () => {
    try {
      await axios.post('http://localhost:3001/api/reminders', { savedAnimes, phoneNumber })
      alert('Reminders set successfully!')
      // Optionally clear the saved animes from localStorage
      localStorage.removeItem("savedAnimes")
      setSavedAnimes([])
    } catch (error) {
      alert('Failed to set reminders. Please try again.')
    }
  }

  return (
    <div className="profile-page">
      <div className="group-wrapper">
        <div className="group">
          <div className="section">
            <div className="container">
              {/* Display dynamic content based on saved shows */}
              <div className="title">Recently Saved Shows</div>
              {savedAnimes.map((anime, index) => (
                <div key={index} className="item">
                  <img className="image" alt={anime.title} src={anime.image} />
                  <div className="frame">
                    <div className="title-2">{anime.title}</div>
                    <p className="subtitle">Next Episode: {anime.nextEpisodeDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Input for phone number and button to send reminders */}
          <div className="section-2">
            <div className="overlap-2">
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button onClick={handleSendReminders}>Set Reminders</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
