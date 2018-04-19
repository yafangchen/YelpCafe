// Get the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// var connectionString = 'mongodb://localhost:27017/yelp'; // for local
// var connectionString = 'mongodb://root:password@ds263707.mlab.com:63707/heroku_rq9c4f5z'; // for heroku
// var mongoose = require("mongoose");
// mongoose.createConnection(connectionString);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(express.static(path.join(__dirname, 'src')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require("./server/app.js")(app);

// For Build: Catch all other routes and return the index file -- BUILDING

/*
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
*/

// server.listen(process.env.PORT , () => console.log('API running on localhost:${port}')); //-- working on heroku
server.listen( port , () => console.log('Running')); // working local

