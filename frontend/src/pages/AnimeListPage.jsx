import React, { useState, useEffect } from "react";
import "./AnimeListPage.css";
import axios from "axios";

export const AnimeListPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
    const [anime, setAnime] = useState(animeList[currentAnimeIndex]);

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

    return (
        <div className="upcoming-anime-page">
            {animeList.map((anime, index) => (
                <div className="div" key={index}>
                    <div className="group">
                        <div className="group-2">
                            <img className="image" alt="Image" src={anime.image} />
                            <div className="text-wrapper">{anime.title}</div>
                            <p className="p">{anime.description}</p>
                            <div className="overlap">
                                <div className="genre-action-isekai">{anime.genre}</div>
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <div className="rectangle" />
                                        <div className="text-wrapper-2">Save to List</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="div-wrapper">
                <div className="text-wrapper-3">Upcoming Anime</div>
            </div>
        </div>
    );
};

export default AnimeListPage;
