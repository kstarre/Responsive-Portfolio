// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
let path = require('path');
let favicon = require('serve-favicon');
require('dotenv').config();

// Set up express
var app = express();

var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static('./public'));
app.use(favicon(path.join(__dirname, './public/img', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require("./routes/html-routes.js")(app);

// Start express app
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});