var axios = require("axios");
var fs = require("fs");

var Movie = function () {

    var divider = "\n------------------------------------------------------------\n\n";

    this.getFilm = function (film) {
        var URL = "http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + film
            

        axios.get(URL)
            .then(function (response) {


                var jsonData = response.data;


                var movieData = [
                    "Title: " + jsonData.Title,
                    "Year: " + jsonData.Year,
                    "IMDB Rating " + jsonData.Ratings[0].Value,
                    "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                    "Langauge: " + jsonData.Language,
                    "Plot: " + jsonData.Plot,
                    "Actors: " + jsonData.Actors,
                ].join("\n\n");

                fs.appendFile("log.txt", movieData + divider, function (err) {
                    if (err) throw err;
                    console.log(movieData)
                });
            }).catch(function (error) {

            });
    };
};

module.exports = Movie;
