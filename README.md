### Liri-bot

Liri bot is a command line node app that takes in parameters and will return you a movie information, concert tour data and spotify song information along with a preview link.

## Technologies Used

Node.js
Javascript

## NPM Packages

node-spotify-api - Package that allows you to access the Spotify Rest API without axios or ajax

moment - Reformats dates to the format of your liking - 
Example: moment(jsonData.datetime).format("MM/DD/YYYY")

axios - Simple package thats similar to ajax except it allows to log calls to terminal.

dotenv - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## Liri Commands

Movie-this "Insert Movie here"

Concert-this "Insert Artist here"

spotify-this-song "Insert Song here" - If no song is entered it will default to Ace of Base: "The Sign"

do-what-it-says - Pulls information from random.txt and follows the command and splits the data into the command and userinput.

