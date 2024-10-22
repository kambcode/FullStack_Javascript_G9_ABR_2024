import { Artist, Song } from "../models/index.js";

export class ArtistController {

    getArtist = async (req, res) => {

        const { limit } = req.query;

        try {
          const artists = await Artist.findAll({
            include: {
              model: Song,
              attributes: ['title', 'id'],
            },
            limit,
          });
      
          res.json(artists);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    getArtistById = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const artist = await Artist.findByPk(id);
      
          if (!artist){
            return res.status(404).json({ message: "Movie not found" });
          }
           
          res.json(artist);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
    }


    getArtistByName = async (req, res) => {
      try {
        const { name }= req.params;

        if ( !name) {
          return res.status(400).json({ message: "name is requeried"})
        }
    
        const artist = await Artist.findOne({ where: { name: name.toLowerCase()}});
    
        if (!artist){
          return res.status(404).json({ message: "Movie not found" });
        }
         
        res.json(artist);
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
      
          const artist = await Artist.create({name, genre});
      
          res.status(201).json(artist);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    updateArtist = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const { name, genre} = req.body;
      
          if (!name || !genre ) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          //const movie = await Movie.update({releaseYear, title, genre}, {where: { id}})
          const artist = await Artist.findByPk(id);
          
          if (!artist)
            return res.status(404).json({ message: "Artist not found" });

          artist.set({
            name,
            genre,
          })

          await artist.save();
      
          res.status(200).json(artist);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    deleteArtist = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const result = await Artist.destroy({ where: { id } });
      
      
          if (!result || result <= 0)
            return res.status(404).json({ message: "Artist not found" });
      
          res.json({ id: id});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

};