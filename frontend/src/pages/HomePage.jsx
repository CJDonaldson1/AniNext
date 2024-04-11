import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/api/anime");
        setAnimeList(data);
      } catch (error) {
        console.error("Failed to fetch anime:", error);
      }
    };
    fetchAnimes();
  }, []);

  const currentAnime = animeList[currentAnimeIndex];

  const saveAnime = (anime) => {
    const savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || [];
    if (!savedAnimes.some(savedAnime => savedAnime.title === anime.title)) {
      savedAnimes.push(anime);
      localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes));
    }
  };

  const handleNextAnime = () => {
    const nextIndex = currentAnimeIndex + 1 >= animeList.length ? 0 : currentAnimeIndex + 1;
    setCurrentAnimeIndex(nextIndex);
  };

  if (!currentAnime) return <div>Loading...</div>;

  return (
    <div className="homepage">
      <div className="anime-display" style={{ backgroundImage: `url(${currentAnime?.image})` }}>
        <div className="anime-info">
          <h1 className="anime-title">{currentAnime?.title}</h1>
          <div className="anime-meta">
            <span className="season">{currentAnime?.studio}</span>
            <span className="year">{new Date(currentAnime?.airingDate).getFullYear()}</span>
          </div>
          <div className="anime-genres">
            {currentAnime?.genres.map((genre, index) => (
              <span key={index} className={`genre genre-${genre.toLowerCase()}`}>{genre}</span>
            ))}
          </div>
          <p className="season-description">{currentAnime?.synopsis}</p>
          <button className="save-button" onClick={() => saveAnime(currentAnime)}>Save to List</button>
          <p className="new-episodes-release">New Episodes Air on Sundays at 1pm est</p>
        </div>
      </div>
      <div className="next-anime-section">
        <div className="next-anime-thumbnails">
          {animeList.slice(currentAnimeIndex + 1, currentAnimeIndex + 5).map((anime, index) => (
            <img key={index} className="next-anime-thumbnail" alt={`Next Anime ${index + 1}`} src={anime.image} />
          ))}
        </div>
        <button className="next-anime-button" onClick={handleNextAnime}>Next Anime</button>
      </div>
    </div>
  );
};

export default HomePage;


