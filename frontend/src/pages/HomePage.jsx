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
    <div>
      <div className="box">
        <div className="group">
          <div className="overlap">
            <img className="anime-background" alt="Anime background" src={animeList[currentAnimeIndex].image} />
            <div className="rectangle" />
            <p className="anime-title">{animeList[currentAnimeIndex].title}</p>
            <div className="season">{currentAnime.studio}</div>
            <div className="year">{currentAnime.airingDate.split("-")[0]}</div>
            <p className="season-description"> {currentAnime.synopsis}</p>
           
            <div className="star-rating">
              <span className="star-1">&#9733;</span>
              <span className="star-2">&#9733;</span>
              <span className="star-3">&#9733;</span>
              <span className="star-4">&#9733;</span>
              <span className="star-5">&#9733;</span>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">Save to List</div>
                <img className="zondicons-add" alt="Zondicons add" src="zondicons-add-outline-2.svg" />
              </div>
            </div>
            <div className="overlap-wrapper">
                <div className="div">
                  <button className="text-wrapper-2" onClick={() => saveAnime(currentAnime)}>Set Reminder</button>
                  <img className="zondicons-add-2" alt="Zondicons add" src="zondicons-add-outline.svg" />
                </div>
              </div>
            <p className="new-episodes-release">New Episodes Air on {currentAnime.airingDate}</p>
            <div className="rectangle-2" />
            <img className="image" alt="Image" src={animeList[currentAnimeIndex + 1]?.image} />
            <img className="image-2" alt="Image" src={animeList[currentAnimeIndex + 2]?.image} />
            <img className="image-3" alt="Image" src={animeList[currentAnimeIndex + 3]?.image} />
            <img className="image-4" alt="Image" src={animeList[currentAnimeIndex + 4]?.image} />
            <img className="image-5" alt="Image" src={animeList[currentAnimeIndex + 5]?.image} />
            <div className="text-wrapper-3">NEXT ANIME</div>
            <button className="vector-5" onClick={handleNextAnime}>Next Anime</button>
            <div>
              <div className="genre" />
              {animeList.slice(currentAnimeIndex + 1, currentAnimeIndex + 6).map((anime, index) => (
                <div className={`genre-${index + 1}`} key={index}>{anime.genres[0]}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
