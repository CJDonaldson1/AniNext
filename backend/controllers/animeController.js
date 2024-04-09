const Anime = require('../models/anime')

exports.getAllAnime = async (req, res) => {
    try {
        const animeList = await Anime.find()
        res.json(animeList)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getAnimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findById(id)
        if (anime) {
            res.json(anime)
        } else {
            res.status(404).send('Anime not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.createAnime = async (req, res) => {
    try {
        const newAnime = new Anime(req.body)
        await newAnime.save()
        res.status(201).json(newAnime)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updateAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAnime = await Anime.findByIdAndUpdate(id, req.body, { new: true })
        if (updatedAnime) {
            res.json(updatedAnime)
        } else {
            res.status(404).send('Anime not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.deleteAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAnime = await Anime.findByIdAndDelete(id)
        if (deletedAnime) {
            res.send('Anime deleted')
        } else {
            res.status(404).send('Anime not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getAnimeByGenre = async (req, res) => {
    const { genre } = req.params;
    try {
      const animes = await Anime.find({ "genres": genre });
      res.json(animes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  };