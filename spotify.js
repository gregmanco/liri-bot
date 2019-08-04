// Requires spotify npm api package
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
// Uses constuctor to hide spotify api key from keys.js file
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
// Sets up divider variable for data to be seperated for easier viewing.
var divider = "\n------------------------------------------------------------\n\n";
// Creates function that will search for "the sign by ace of base" if there is no other input
function SearchSpotify(searchTerm) {
   console.log(searchTerm.length);
   if (searchTerm.length === 0) {
       searchTerm = "the sign ace of base"
   }
   // Uses spotify search function to search for a specific song
   spotify
       .search({
           type: 'track',
           query: searchTerm
       }, function (error, response) {


// Creates variable songString which contains response data from Spotify API
        var songString =[
            "Artist: " + response.tracks.items[0].artists[0].name,
            "Song Title: " + response.tracks.items[0].name,
            "Preview Link: " + response.tracks.items[0].preview_url,
            "Album Title: " + response.tracks.items[0].album.name,
        ].join("\n\n");
// Appends log.txt file with response data that was saved in variable songString
        fs.appendFile("log.txt", songString + divider, function (err) {
            if (err) throw err;
            console.log(songString)
        });

       })

   }
// Exports SearchSpotify function to be used in liri.js file.
module.exports = SearchSpotify