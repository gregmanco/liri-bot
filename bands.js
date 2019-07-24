 var axios = require("axios")
 var moment = require("moment")
 var fs = require("fs")

 var Bands = function () {
     this.getBand = function (artist) {
         var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

         axios.get(URL).then(function (response) {
             var jsonData = response.data[0]
             console.log(jsonData)

             var aritstData = [
                 "Name of Venue  " + jsonData.venue.name,
                 "Venue Location " + jsonData.venue.city,
                 "Date of the Event " + moment(jsonData.datetime).format("MM/DD/YYYY")
             ].join("\n\n")

             fs.appendFile("log.txt", aritstData, function (err) {
                 if (err) throw err;
                 console.log(aritstData);


             })

         })
     }
 }
 module.exports = Bands;