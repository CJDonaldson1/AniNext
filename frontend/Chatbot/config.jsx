// ChatbotComponent.jsx
import React, { useState } from 'react'
import axios from 'axios';
import MessageList from './MessageList'

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([])

  const fetchRandomAnime = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/anime`)
      const allAnime = response.data
  
      if (allAnime.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAnime.length)
        const recommendation = allAnime[randomIndex]
        setMessages([recommendation])
      } else {
        setMessages([{ text: "No anime found." }])
      }
    } catch (error) {
      console.error('Error fetching anime:', error)
      setMessages([{ text: 'Sorry, there was an error fetching anime.' }])
    }
  }

  const saveAnime = (anime) => {
    const savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || []
    if (!savedAnimes.some(savedAnime => savedAnime.title === anime.title)) {
      savedAnimes.push(anime);
      localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes))
    }
  }

  return (
    <div>
      <MessageList messages={messages} saveAnime={saveAnime} />
      <button onClick={fetchRandomAnime}>Get Random Anime</button>
    </div>
  )
}

export default ChatbotComponent


