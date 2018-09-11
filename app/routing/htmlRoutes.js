//Require Node modules
var path = require ("path");

//Specify html routes
module.exports = function (app) {

    //Home page
    app.get ("/home", function (req, res) {
        res.sendfile (path.join (__dirname, "../public/home.html"));
    });

    //Survey page
    app.get ("/survey", function (req, res) {
        res.sendfile (path.join ( __dirname, "../public/survey.html"));
    });

    //If no match, default to home
    app.get ("/*", function (req, res) {
        res.sendFile (path.join (__dirname, "../public/home.html"));
      });

}