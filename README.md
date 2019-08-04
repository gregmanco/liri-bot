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

Movie-this "Insert Movie here" - The default if no movie is entered is "Mr. Nobody".

Concert-this "Insert Artist here" - Has no default setting and will not show anything if the current artist entered has no upcoming events.

spotify-this-song "Insert Song here" - If no song is entered it will default to Ace of Base: "The Sign" Logs to the terminal Artist, Song Title, a preview link to the song and the Album its from.

do-what-it-says - Pulls information from random.txt and follows the command and splits the data into the command and userinput.

Example of use with Default Inputs used: https://drive.google.com/file/d/1SJarCm-z0r7YmV4RgiGdlcdWdmGZiRxm/view

Example of use with User Inputted commands: https://drive.google.com/file/d/1jSTrAfwKKIvYtsoDdWhjR3It0EaWpncv/view


## Usage

1. Clone from git@github.com:gregmanco/liri-bot.git

Example in terminal: git clone git@github.com:gregmanco/liri-bot.git

2. NPM Install (Should Install the required packages used but if not use listed NPM packages above) and node.js

Example in terminal: npm install (while located in the folder)

3. Use one of the following commands

    node liri.js movie-this <insert movie here>

    Returns the Title, Year of Release , IMDB Rating , Rotten Tomato Score, Language , Plot and Actors

    node liri.js concert-this <insert band/artist here>

    Returns the Venue, Location and Date of the event.

    node liri.js spotify-this-song <input song here> 
    
    Returns the following information Artist, The song's name, A preview link of the song, 
    The album that the song is from


    node liri.js do-what-it-says

    Returns the song or data from random.txt file and passes it to the spotify api. It currently only has Blackstreet Boys "I Want It That Way"


Author: Gregory Manco

