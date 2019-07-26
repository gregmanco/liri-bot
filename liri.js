require("dotenv").config();
var fs = require("fs");

var Bands = require("./bands.js");
var band = new Bands()

var keys = require("./keys.js");
var SearchSpotify = require("./spotify.js");

var omdb = require("./omdb.js");
var movie = new omdb();


var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ")

function prompt(command, userInput) {
   if (command === "concert-this") {
      band.getBand(userInput);
   } else if (command === "spotify-this-song") {
      SearchSpotify(userInput);
      console.log("this is for spotify-this-song")
   } else if (command === "movie-this") {
      movie.getFilm(userInput);
     if (!userInput ) {
        userInput = "Mr. Nobody"
     }
     

   } else if (command === "do-what-it-says") {
      console.log("this is for do-what-it-says")

   
      //defines function that reads the random.txt file
      function readRandom() {
         //uses the method readFile from fs
         fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
               throw err;
            }
            //puts the text from random.txt into an array
            data = data.split(" ");
            //takes the first index of the array and puts it into the command variable
            var command = data[0];
            //takes the rest of the array and puts it into the userInput variable as a string
            var userInput = data.slice(1).join(" ");
            //takes the command and userInput and passes it through the prompt function
            prompt(command, userInput);
         });
      }
      //calls the readRandom function
      readRandom();
   } else {
      console.log("this is the default option");
   }
}
//calls the prompt function
prompt(command, userInput);