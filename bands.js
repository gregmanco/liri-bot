 var axios = require("axios")
var moment = require("moment")

 var Bands = function() {
     this.getBand = function(artist){
         var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

         axios.get(URL).then(function(response) {
            var jsonData = response.data
            console.log(jsonData)

            var aritstData = [
                "Name of Venue  " + jsonData.venue.name,
                "Venue Location " + jsonData.venue.city,
                "Date of the Event " + moment(jsonData.datetime),
            ]
                
            })
         }
     }
 