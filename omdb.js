// Require axios npm module
var axios = require("axios");
var fs = require("fs");

var Movie = function () {

    var divider = "\n------------------------------------------------------------\n\n";
// Setting up a function to return response data for the inputted movie.
    this.getFilm = function (film) {
        var URL = "http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + film
        console.log(film.length);
        
// Uses axios along with the omdb api url we set up to get a response from the omdb api
        axios.get(URL)
            .then(function (response) {


                var jsonData = response.data;

// Takes response data that will be returned and put its into a variable
                var movieData = [
                    "Title: " + jsonData.Title,
                    "Year: " + jsonData.Year,
                    "IMDB Rating " + jsonData.Ratings[0].Value,
                    "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                    "Langauge: " + jsonData.Language,
                    "Plot: " + jsonData.Plot,
                    "Actors: " + jsonData.Actors,
                ].join("\n\n");
// Appends log.txt file with the data that was returned.
                fs.appendFile("log.txt", movieData + divider, function (err) {
                    if (err) throw err;
                    console.log(movieData)
                });
            }).catch(function (error) {

            });
    };
};
// Exports movie function to be used on liri.js file.
module.exports = Movie;
