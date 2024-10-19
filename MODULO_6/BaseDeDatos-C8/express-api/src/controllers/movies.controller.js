import { Movie } from "../models/movies.model.js";

export class MovieController {

    getMovies = async (req, res) => {

        const { limit } = req.query;

        try {
          const movies = await Movie.findAll({
            //attributes: ['releaseYear', 'id']
            limit,
          });
      
          res.json(movies);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    getMovieById = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const movie = await Movie.findOne({ where: { id }});

          console.log(movie);
      
          if (!movie){
            return res.status(404).json({ message: "Movie not found" });
          }
           
          res.json(movie);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
    }

    create = async (req, res) => {
        try {
          const { releaseYear, title, genre, director } = req.body;
          console.log(req.body);
      
          if (!title || !genre || !releaseYear) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          if (isNaN(releaseYear)) {
            return res
              .status(404)
              .json({ message: "release year should be a numbers" });
          }
      
          const movie = await Movie.create(
            {releaseYear, title, genre, director},
        );
      
          res.status(201).json(movie);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    updateMovie = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const { releaseYear, title, genre, director } = req.body;
      
          if (!title || !genre || !releaseYear) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          //const movie = await Movie.update({releaseYear, title, genre}, {where: { id}})
          const movie = await Movie.findByPk(id);
          
          if (!movie)
            return res.status(404).json({ message: "Movie not found" });

          movie.set({
            releaseYear,
            title,
            genre,
            director
          })

          await movie.save();
      
          res.status(200).json(movie);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

    deleteMovie = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const result = await Movie.destroy({ where: { id: id } });
      
      
          if (!result || result <= 0)
            return res.status(404).json({ message: "Movie not found" });
      
          res.json({ id: id});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

};