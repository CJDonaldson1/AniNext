import React, { useState, useEffect } from "react"
import "./AnimeListPage.css"
import axios from "axios"

export const AnimeListPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0)
    const [anime, setAnime] = useState(animeList[currentAnimeIndex])

        useEffect(() => {
            const fetchAnimes = async () => {
                try {
                    const { data } = await axios.get("http://localhost:3001/api/anime");
                    setAnimeList(data);
                } catch (error) {
                    console.error("Failed to fetch anime:", error)
                }
            }
            fetchAnimes()
        }, [])
        const saveAnime = (anime) => {
            const savedAnimes = JSON.parse(localStorage.getItem("savedAnimes")) || []
            if (!savedAnimes.some(savedAnime => savedAnime.title === anime.title)) {
                savedAnimes.push(anime);
                localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes))
            }
        }
        const capText = (text, maxLength) => {
            return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text
            
        }
        return (
            <div className="upcoming-anime-page">
                {animeList.map((anime, index) => (
                    <div className="box" key={index}>
                        <img className="image" alt="Image" src={anime.image} />
                        <div className="text-wrapper">{capText(anime.title, 50)}</div>
                        <p className="p">{capText(anime.synopsis, 50)}</p>
                        <div className="genre-action-isekai">{anime.genres}</div>
                        <button className="save-button" onClick={() => saveAnime(anime)}>Save to List</button>
                    </div>
                ))}
            </div>
        )
    }

export default AnimeListPage
