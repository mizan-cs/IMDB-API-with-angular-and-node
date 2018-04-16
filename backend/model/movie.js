let csvToJson   = require('convert-csv-to-json');
var exports     = module.exports = {};

const https = require('https');

//Import links.csv file
let data_links  = csvToJson.getJsonFromCsv("links.csv");
let data_movies = csvToJson.getJsonFromCsv('movies.csv');

// CSV Colimn Name
key_links       = Object.keys(data_links[0])[0];
key_movies      = Object.keys(data_movies[0])[0];

//Genres Array
genres          = [];
movies          = [];
//Initialize i variable for loop
var i           = 0;

genres  = getGenresToJson();
links   = getLinksToJson();
for(i = 0;i<data_movies.length;i++){
    movies.push(
        {
            "imdbId"  : links[i].imdbId,
            "tmdbId"  : links[i].tmdbId,
            "genres"  : genres[i]
        }
    )
}


exports.MoviesByGenres = function getMoviesByGenres(genres,start,end){
    list = [];
    for(i=0;i<movies.length;i++)
    {
        if(movies[i].genres.indexOf(genres) != -1){
            list.push(movies[i]);
        }
    }
    return list.slice(start,end);
}

exports.MoviesAllByGenres = function getMoviesByGenres(genres){
    list = [];
    for(i=0;i<movies.length;i++)
    {
        if(movies[i].genres.indexOf(genres) != -1){
            list.push(movies[i]);
        }
    }
    return list;
}

exports.RandomMoviesByGenres = function getMoviesLength(genres){

    list = [];
    for(i=0;i<movies.length;i++)
    {
        if(movies[i].genres.indexOf(genres) != -1){
            list.push(movies[i]);
        }
    }
    RandomMovie = [
        list[Math.floor(Math.random() * list.length)],
        list[Math.floor(Math.random() * list.length)],
        list[Math.floor(Math.random() * list.length)]
    ]
    return RandomMovie;
}


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
                genres.push(['Uncategory']);
        }
    }

    return genres;
}
