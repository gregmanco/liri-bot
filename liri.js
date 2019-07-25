require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Bands = require("./bands.js");
var random = require("./randomcommand.js");
var Omdb = require("./omdb.js");
// var spotify = new Spotify(keys.spotify);
var movie = new Omdb;
var event = new Bands();
var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
// function that takes in a command and userInput
function prompt(command, userInput) {
    //checks if command is concert-this
    if (command === "concert-this") {
        console.log("this is the concert-this command");
        
        //takes the user's input and passes it into the band.js file
        event.getBand(userInput);
    }
    //checks if the command is spotify-this-song 
    else if (command === "spotify-this-song") {
        console.log("this is spotify-this-song command");
    } 
    //checks if the command is movie-this
    else if (command === "movie-this") {
        console.log("this is movie-this command");
        movie.getFilm(userInput);
    } 
    //checks if the command is do-what-it-says
    else if (command === "do-what-it-says") {
        console.log("this is do-what-it-says command");
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