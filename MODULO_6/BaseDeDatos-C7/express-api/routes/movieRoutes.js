const { Router } = require('express');
const { movies, directors } = require('../data');

const router = Router();


router.get('/movies', (req, res) => {
    res.json(movies);
});


router.get('/movies/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);

    const movie = movies.find(movie => movie.id === id);
    if (!movie) return res.status(404).json({ message: 'Movie not found'});
    res.json(movie);
});


router.post('/movies', (req, res) => {
    
    const { directorId, releaseYear } = req.body;
    console.log(req.body);


    if (!req.body.title || !directorId || !req.body.genre || !releaseYear) {
        return res.status(400).json({message: 'All fields are required'});
      }

    if (isNaN(releaseYear) || isNaN(directorId) ) {
        return res.status(404).json({ message: 'release year and director id should be a numbers'})
    }

    const director = directors.find(director => director.id === directorId);

    if (!director ){
        return res.status(404).json({ message: `directorId: ${directorId} doens't exist`})
    }
    
    
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        directorId: req.body.directorId,
        genre: req.body.genre,
        releaseYear: req.body.releaseYear
      };
    
    movies.push(movie);

    res.status(201).json(movie);

})


router.put('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const movie = movies.find(movie => movie.id === id);
    
    if (!movie) return res.status(404).json({message: 'Movie not found'});
  
    movie.title = req.body.title;
    movie.directorId = req.body.directorId;
    movie.genre = req.body.genre;
    movie.releaseYear = req.body.releaseYear;
  
    res.status(200).json(movie);
  });


router.delete('/movies/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const movieIndex = movies.findIndex(m => m.id === id);
    console.log({movieIndex});
    
    if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found'});
  
    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie[0]);
  });


module.exports = router;