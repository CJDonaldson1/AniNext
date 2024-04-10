import React, { useState, useEffect } from "react"
import axios from "axios"
import "./HomePage.css"

const HomePage = () => {
  const [animeList, setAnimeList] = useState([])
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/anime")
        setAnimeList(data);
      } catch (error) {
        console.error("Failed to fetch anime:", error)
      }
    }

    fetchAnimes()
  }, [])
  const currentAnime = animeList[currentAnimeIndex]
  const saveAnime = (anime) => {
    const savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || []
    if (!savedAnimes.some(savedAnime => savedAnime.title === anime.title)) {
      savedAnimes.push(anime)
      localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes))
    }
  }

  if (!currentAnime) return <div>Loading...</div>

  const handleNextAnime = () => {
    const nextIndex = currentAnimeIndex + 1 === animeList.length ? 0 : currentAnimeIndex + 1
    setCurrentAnimeIndex(nextIndex)
  }
  return (
    <div className="homepage">
      <div className="anime-display">
        <div className="anime-info">
          <img className="anime-background" alt="Anime background" src={currentAnime.image} />
          <div className="anime-details">
            <p className="anime-title">{currentAnime.title}</p>
            <div className="anime-metadata">
              <span className="season">{`Season ${currentAnime.season}`}</span>
              <span className="year">{currentAnime.airingDate.split("-")[0]}</span>
            </div>
            <p className="season-description">{currentAnime.synopsis}</p>
            <button className="save-to-list" onClick={() => console.log("Save to List Clicked")}>Save to List</button>
            <p className="new-episodes-release">New Episodes Air on {currentAnime.airingDate}</p>
          </div>
        </div>
        <div className="next-anime-preview">
          <p className="text-next">NEXT ANIME</p>
          {animeList.slice(currentAnimeIndex + 1, currentAnimeIndex + 6).map((anime, index) => (
            <img key={index} className="next-anime-img" alt={`${anime.title} preview`} src={anime.image} />
          ))}
          <button className="next-anime-button" onClick={handleNextAnime}>Next Anime</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage
