
var express = require('express');
var router = express.Router();
var movie  =require('../model/movie.js');
module.exports = router;

//All API Router files

/*
    slice movies array in
    url pattart = http://hostname/api/movies/genre/begin/end
    genre = this wil get a genre name
    begin = this will get an number. begin params is a starting point of this array
    end = this will get an number. end params is a ending point of this array

*/


router.get('/movies/:genre/:begin/:end', (req, res, next)=>{

    res.send(movie.MoviesByGenres(req.params.genre,req.params.begin,req.params.end));
});

router.get('/movies/:genre', (req, res, next)=>{

    res.send(movie.MoviesAllByGenres(req.params.genre));
});

/*
    get random movies
    url pattart = http://hostname/api/movies/random/genre/amount
    genre = this wil get a genre name
    amount = this is a number. this api will return 'number' random movies array

*/
router.get('/movies/random/:genre', (req, res, next)=>{

    res.send(movie.RandomMoviesByGenres(req.params.genre));
});
