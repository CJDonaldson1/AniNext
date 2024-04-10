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
          <div className="group-wrapper">
              <div className="group">
              <div className="overlap" style={{ backgroundImage: `url(${currentAnime?.image})` }}>
                      
                      <p className="anime-title">{currentAnime?.title}</p>
                      <div className="season">{currentAnime?.studio}</div>
                      <div className="year">{new Date(currentAnime?.airingDate).getFullYear()}</div>
                      <div className="div-wrapper">
                          {/* Assuming first genre is displayed; adjust if necessary */}
                          <div className="div">{currentAnime?.genres?.[0]}</div>
                      </div>
                      <p className="season-description">{currentAnime?.synopsis}</p>
                      <div className="overlap-group-wrapper">
                          <div className="overlap-group-2" onClick={() => saveAnime(currentAnime)}>
                              <div className="text-wrapper-2">Save to List</div>
                          </div>
                      </div>
                      <p className="new-episodes-release">New Episodes Air on Sundays at 1pm est</p>
                  </div>
                  <div className="overlap-2">
                      {/* Adjusting to match the CSS class names for each image */}
                      {animeList.slice(currentAnimeIndex + 1, currentAnimeIndex + 5).map((anime, index) => (
                          <img key={index} className={`image-${index + 1}`} alt={`Next Anime ${index + 1}`} src={anime.image} />
                      ))}
                      <div className="text-wrapper-3">NEXT ANIME</div>
                      <button className="vector" onClick={handleNextAnime}>Next Anime</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default HomePage
