//    header space

// THESE ARE OUR API ROUTES


// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var router = express.Router();

// Require the models
var db = require("../models");

// Routes

// GET route for getting all of the projects
router.get("/api/projects", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Project.findAll({raw:true}).then(function(result) {
    // We have access to the projects as an argument inside of the callback function
    res.json(result);
  });
});

// GET route for getting all of the tasks
router.get("/api/tasks", function(req, res) {
    db.Task.findAll({raw:true}).then(function(result) {
      res.json(result);
    });
  });

  // GET route for getting all of the users
router.get("/api/users", function(req, res) {
  db.User.findAll({raw:true}).then(function(result) {
    res.json(result);
  });
});

  // GET route for getting one of the users
  router.get("/api/users/:email", function(req, res) {
    db.User.findOne({
      raw:true,
      where: {
        email: req.params.email,
      },
      attributes: {
        exclude: ["password"],
      },
      include: [db.ProjectMember]
      }).then(function(result) {
      res.json(result);
    });
  });

    // GET route for getting one of the users
    router.get("/manager/:id", function(req, res) {
      db.User.findAll({
        raw:true,
        where: {
          id: req.params.id,
        },
        }).then(function(result) {
        res.json(result);
      });
    });

  // GET route for getting all of the projectmembers
  router.get("/api/projectmembers", function(req, res) {
    db.ProjectMember.findAll({raw:true}).then(function(result) {
      res.json(result);
    });
  });
  
// Export routes for server.js to use.
module.exports = router;
  

