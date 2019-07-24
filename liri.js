require("dotenv").config();

var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

//`concert-this`//
var command = process.argv[2]

if( command === "concert-this" ){
    console.log( "Bands in Town API")
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

