//Require needed node modules
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var app = express ();

//Configure port
var PORT = process.env.PORT;

//Create correct file path 
app.use (express.static (path.join (__dirname, "./app/public")));

//Need to parse response data
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.text ());

//Add app routes
require (path.join (__dirname, "./app/routing/apiRoutes"))(app);
require (path.join (__dirname, "./app/routing/htmlRoutes"))(app);

//Start listening
app.listen (PORT, function () {
    console.log ("App listening on PORT: " + PORT);
});