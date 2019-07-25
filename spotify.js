var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var divider = "\n------------------------------------------------------------\n\n";

function SearchSpotify(searchTerm) {
   console.log(searchTerm.length);
   if (searchTerm.length === 0) {
       searchTerm = "the sign ace of base"
   }
   spotify
       .search({
           type: 'track',
           query: searchTerm
       }, function (error, response) {



        var songString =[
            "Artist: " + response.tracks.items[0].artists[0].name,
            "Song Title: " + response.tracks.items[0].name,
            "Preview Link: " + response.tracks.items[0].preview_url,
            "Album Title: " + response.tracks.items[0].album.name,
        ].join("\n\n");

        fs.appendFile("log.txt", songString + divider, function (err) {
            if (err) throw err;
            console.log(songString)
        });

       })

   }

module.exports = SearchSpotify