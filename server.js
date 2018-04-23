// Get the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var passport = require('passport');


// var connectionString = 'mongodb://localhost:27017/yelp'; // for local
// var connectionString = 'mongodb://root:password@ds263707.mlab.com:63707/heroku_rq9c4f5z'; // for heroku
// var mongoose = require("mongoose");
// mongoose.createConnection(connectionString);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));


var baseUrl = "http://localhost:3100";

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Credentials', "true");
  next();
});


var originsWhitelist = [
  'http://localhost:3100',
  'http://localhost:4200',      //this is my front-end url for development
  'https://maps.googleapis.com/maps/api/place/'
];
var corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));


const port = process.env.PORT || '3100';
app.set('port', port);

require("./server/app.js")(app);
// Create HTTP server
const server = http.createServer(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// server.listen(process.env.PORT , () => console.log('API running on localhost:${port}')); //-- working on heroku
server.listen( port , () => console.log('Running')); // working local

