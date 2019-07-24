var key = require("dotenv").config();
var Bands = require("./bands.js")
var keys = require("./keys.js");

var band = new Bands();
var userInput = process.argv.slice(3).join(" ");

//var spotify = new Spotify(keys.spotify);

//`concert-this`//
var command = process.argv[2]

if( command === "concert-this" ){
    console.log( "Bands in Town API")
    band.getBand(userInput);
}
else if ( command === "spotify-this-song"){
    console.log("Spotify API Command")
}
else if ( command === "movie-this") {
    console.log( "Omdb API Command")
}
else if ( command === "do-what-it-says") {
    console.log("Do what it says")
}
else {
    console.log( "This is the default")
}

