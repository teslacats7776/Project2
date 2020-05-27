//    header space

// THESE ARE OUR API ROUTES


// Require Express for the router
var express = require("express");
var path = require("path");

// Create the express router, and export at the end of this file
var htmlRoutes = express.Router();

// Require the models
var db = require("../models");

// Routes

htmlRoutes.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../html/index.html"))
});

htmlRoutes.get("/manager", function(req,res){
    res.sendFile(path.join(__dirname,"../html/manager.html"))
});

htmlRoutes.get("/teampage", function(req,res){
    res.sendFile(path.join(__dirname,"../html/team.html"))
});


// Export routes for server.js to use.
module.exports = htmlRoutes;

