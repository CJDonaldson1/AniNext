import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './HomePage.css'

const HomePage = () => {
  const [animeList, setAnimeList] = useState([])
  const [featuredAnimeIndex, setFeaturedAnimeIndex] = useState(0)

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/anime')
        setAnimeList(response.data)
      } catch (error) {
        console.error('Error fetching anime list:', error)
      }
    };
    fetchAnime()
  }, [])

  const featuredAnime = animeList[featuredAnimeIndex]

  const handleNextAnime = () => {
    setFeaturedAnimeIndex((prevIndex) =>
      prevIndex === animeList.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="homepage-container">
      {featuredAnime && (
        <div className="overlap-wrapper">
          <img
          className="anime-background"
          alt={`${featuredAnime.title} background`}
          src={featuredAnime.image || 'default-placeholder-image-path.jpg'}
        />
          <div className="anime-details">
            <div className="anime-title">{featuredAnime.title}</div>
            <div className="airing-date">{new Date(featuredAnime.airingDate).toDateString()}</div>
            <div className="anime-genres">
              {featuredAnime.genres.map((genre, index) => (
                <span key={index} className="anime-genre">{genre}</span>
              ))}
            </div>
            <div className="anime-synopsis">{featuredAnime.synopsis}</div>
            <div className="anime-studio">{featuredAnime.studio}</div>
          </div>
          <button className="next-anime-button" onClick={handleNextAnime}>Next Anime</button>
        </div>
      )}
    </div>
  )
}

export default HomePage

