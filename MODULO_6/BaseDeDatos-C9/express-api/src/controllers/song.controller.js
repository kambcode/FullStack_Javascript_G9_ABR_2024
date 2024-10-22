import { Song } from "../models/index.js";

export class SongController {

    getSongs = async (req, res) => {

        const { limit } = req.query;

        try {
          const Songs = await Song.findAll({
            include: 'artist',
            limit,
          });
      
          res.json(Songs);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    getSongById = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const Song = await Song.findByPk(id);
      
          if (!Song){
            return res.status(404).json({ message: "Movie not found" });
          }
           
          res.json(Song);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
    }

    getSongsByArtist = async (req, res) => {
      try {
        const artistId = parseInt(req.params.artistId);
    
        const songs = await Song.findAll({
          where: { artistId: artistId}
        });
         
        res.json(songs);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    }

    create = async (req, res) => {
        try {
          const { name, genre} = req.body;
      
          if (!name || !genre ) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          const Song = await Song.create({name, genre});
      
          res.status(201).json(Song);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    updateSong = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const { name, genre} = req.body;
      
          if (!name || !genre ) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          //const movie = await Movie.update({releaseYear, title, genre}, {where: { id}})
          const Song = await Song.findByPk(id);
          
          if (!Song)
            return res.status(404).json({ message: "Song not found" });

          Song.set({
            name,
            genre,
          })

          await Song.save();
      
          res.status(200).json(Song);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    deleteSong = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const result = await Song.destroy({ where: { id } });
      
      
          if (!result || result <= 0)
            return res.status(404).json({ message: "Song not found" });
      
          res.json({ id: id});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

};