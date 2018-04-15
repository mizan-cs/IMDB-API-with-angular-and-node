
var express = require('express');
var router = express.Router();

let csvToJson = require('convert-csv-to-json');
const add =require('../model/movies');

module.exports = router;

//Import links.csv file
let data_links  = csvToJson.getJsonFromCsv("links.csv");
let data_movies = csvToJson.getJsonFromCsv('movies.csv');


key_links   = Object.keys(data_links[0])[0];
key_movies  = Object.keys(data_movies[0])[0];


genres       = [];

var i        = 0;



function getLinksToJson(){
    json_links = [];
    for(i = 0;i<data_links.length;i++)
    {
        json_links.push(
            {
                "movieId" :   data_links[i][key_links].split(',')[0],
                "imdbId"  :   data_links[i][key_links].split(',')[1],
                "tmdbId"  :   data_links[i][key_links].split(',')[2].replace('\r',''),
            }
        );
    }

    return json_links;
}



function getGenresToJson(){
    c = 0;
    genres = [];
    // Create genres in json Array
    for(i=0; i<data_movies.length; i++)
    {
        if(typeof data_movies[i][key_movies].split(',')[2] !== 'undefined'){


            if(data_movies[i][key_movies].split(',').length == 3)
            {
                genres.push(data_movies[i][key_movies].split(',')[2].replace('\r','').split('|'));
            }
            else
            {

                genres.push(data_movies[i][key_movies]
                    .slice(data_movies[i][key_movies].lastIndexOf(',')+1, data_movies[i][key_movies].length)
                    .replace('\r','')
                    .split('|'));
            }

        }else {
            genres.push(['Uncatagories'])
        }
    }

    return genres;
}



function getMovieToJson(){
    genres = getGenresToJson();
    json_movies = [];
    for(i = 0;i<data_movies.length;i++){
        str = data_movies[i][key_movies];
        if(str.split(',').length == 3)
        {
            json_movies.push(
              {
                "movieId" :   str.split(',')[0],
                "title"   :   str.split(',')[1],
                "genres"  :   genres[i]
              }
            )
        }
        else
        {
            json_movies.push(
                {
                    "movieId" : str.slice(0, str.indexOf(',')),
                    "title"   : str.slice(str.indexOf(',')+2, str.lastIndexOf(',')-1),
                    "genres"  : genres[i]
                }
            )
        }

    }

    return json_movies;
}


function getGenresList(){
    genres = getGenresToJson();
    genres_list = [];
    var j = 0;
    //Create genres List
    for(i=0; i<genres.length; i++)
    {
        for(j=0; j<genres[i].length;j++)
        {
            if(genres_list.indexOf(genres[i][j]) === -1)
            {
                genres_list.push(genres[i][j]);
            }
        }
    }
    return genres_list;
}

function getMoviesByGenres(genres){
    movies = getMovieToJson();
    list = [];

    for(i=0;i<movies.length;i++)
    {
        if(movies[i].genres.indexOf(genres) != -1){
            list.push(movies[i]);
        }
    }

    return list;
}


router.get('/links', (req, res, next)=>{

    res.send(getLinksToJson());
});


router.get('/movies', (req, res, next)=>{

    res.send(getMovieToJson());
});

router.get('/movies/genres', (req, res, next)=>{

    res.send(getGenresToJson());
});

router.get('/movies/genres/list', (req, res, next)=>{

    res.send(getGenresList());
});

router.get('/test', (req, res, next)=>{

    console.log(add(1,2));
    res.send([add(10,20)]);
    //res.send(getMoviesByGenres(req.params.name));
});
