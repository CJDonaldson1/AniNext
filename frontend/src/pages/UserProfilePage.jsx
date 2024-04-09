import React, { useState, useEffect } from "react"
import axios from "axios"
import "./UserProfilePage.css"

export const ProfilePage = () => {
  const [savedAnimes, setSavedAnimes] = useState([])
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    const loadedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || []
    setSavedAnimes(loadedAnimes)
  }, [])

  const handleSendReminders = async () => {
    if (!phoneNumber) {
      alert('Please enter your phone number.')
      return
    }
    
    // Construct a message with titles of saved animes
    const message = savedAnimes.map(anime => anime.title).join(", ")
    
    if (!message) {
      alert('There are no animes saved to send reminders for.')
      return
    }

    try {
      await axios.post('http://localhost:3001/api/reminders', { savedAnimes, phoneNumber, message })
      alert('Reminders set successfully!')
      localStorage.removeItem("savedAnimes")
      setSavedAnimes([])
    } catch (error) {
      console.error('Failed to set reminders:', error);
      alert('Failed to set reminders. Please try again.')
    }
  }

  return (
    <div className="profile-page">
      <div className="group-wrapper">
        <div className="group">
          <div className="section">
            <div className="container">
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
