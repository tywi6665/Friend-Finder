//Require node modules
var express = require ("express");
var path = require ("path");
var bodyParser = require ("body-parser");

var app = express ();

//Import friends array from friends.js
var friendsArr = require ("../data/friends.js");

//Use express to get info from server
module.exports = function (app) {
    console.log(friendsArr);
    app.get ("/api/friends", function (req, res) {
        return res.json (friendsArr);
    });

    app.get ("api/friends", function (req, res) {
        res.sendfile (path.join (__dirname, "/api/friends"));
    });

    //Once necessary info has been retrieved from server path, time
    //to post user info to server
    app.post ("/api/friends", function (req, res) {
        var userData = req.body;
        var userName= req.body.name;
        var userPhoto = req.body.photo;
        var userScores = req.body.scores;

        var friendMatch = {
            name: "",
            photo: "",
            bestDif: 1000
        };

        var Dif;
        for (var i = 0; i < friendsArr.length; i++) {
            var check = friendsArr[i];
            newDif = 0;
            console.log (userScores);
            for (var j = 0; j < check.scores.length; j++) {
                var checkScore = check.scores[j];
                console.log(checkScore);
                var userScore = userScores[j];
                console.log(userScore);
                newDif += Math.abs (parseInt (userScore) - parseInt (checkScore));
                console.log (newDif)
            }
            if (newDif <= friendMatch.bestDif) {
                friendMatch.name = check.name;
                friendMatch.photo = check.photo;
                friendMatch.bestDif = newDif;
            }
        };

        //console.log (friendMatch);
        friendsArr.push (userData);
        res.json (friendMatch);
    });

};