var express = require('express');
var router = express.Router();
var movie  =require('../model/movie.js');
module.exports = router;

//All API Router

router.get('/movies/genres', (req, res, next)=>{

    res.send(movie.getGenrisWithRandomMovies());
});

router.get('/movies/random/:genre', (req, res, next)=>{

    res.send(movie.getRandomGenreMovies(req.params.genre));
});


router.get('/movies/:genre/:begin/:end', (req, res, next)=>{

    res.send(movie.MoviesByGenres(req.params.genre,req.params.begin,req.params.end));
});

router.get('/movies/:genre', (req, res, next)=>{

    res.send(movie.MoviesAllByGenres(req.params.genre));
});

router.get('/test', (req, res, next)=>{

    res.send(movie.GetGenresList());
});
