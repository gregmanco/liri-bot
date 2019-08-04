 // Requires developer to install the following npm modules. "Axios", "Moment",
 
 var axios = require("axios")
 var moment = require("moment")
 var fs = require("fs")
// Makes a divider variable for easier seperation of data
 var divider = "\n------------------------------------------------------------\n\n";
// Sets up a backend api call that will render to liri.js file.
 var Bands = function () {
     this.getBand = function (artist) {
         var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

         axios.get(URL).then(function(response) {
             var jsonData = response.data[0]
             
        // Sets up variable for the response data we want to return
             var artistData = [
                 "Name of Venue  " + jsonData.venue.name,
                 "Venue Location " + jsonData.venue.city,
                 "Date of the Event " + moment(jsonData.datetime).format("MM/DD/YYYY")
             ].join("\n\n")

             fs.appendFile("log.txt", artistData + divider, function (err) {
                 if (err) throw err;
                 console.log(artistData);


             })

         })
     }
 }
 // Exports function to be used eslewhere
 module.exports = Bands;