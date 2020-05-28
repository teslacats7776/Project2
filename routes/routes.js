//    header space

// THESE ARE OUR API ROUTES


// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var router = express.Router();

// Require the models
var db = require("../models");
var path = require("path");
// Routes
router.get("/", function (req, res) {
  console.log("Inside root route");
  res.sendFile(path.join(__dirname , "../public/home.html"));
})

// Routes
router.get("/team", function (req, res) {
   
  res.sendFile(path.join(__dirname , "../public/team.html"));
})

router.get("/manager", function (req, res) {
   
  res.sendFile(path.join(__dirname , "../public/manager.html"));
})




// Post to user table
router.post("/api/newuser", function (req, res) {
  console.log("Inside new user");

  db.User.create({
      userName: req.body.userName,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name:req.body.lastName,
      email:req.body.email
  }).then(function (result) {
      console.log("Inserted into user table");
  }).catch(function (err) {
      console.log(err);
  })
})
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
    // findAll returns all entries for a table when used with no options
    db.Task.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });

  // GET route for getting all of the users
router.get("/api/users", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({raw:true}).then(function(result) {
    // We have access to the team as an argument inside of the callback function
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
      // We have access to the user as an argument inside of the callback function
      res.json(result);
    });
  });

  // GET route for getting all of the projectmembers
  router.get("/api/projectmembers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.ProjectMember.findAll({raw:true}).then(function(result) {
      // We have access to the team as an argument inside of the callback function
      res.json(result);
    });
  });


  /* ****************************** EXAMPLES TAKEN FROM THE BURGER2 SEQUELIZE HOMEWORK  > 'TASK MANAGER'

// POST route for saving a new tasks
router.post("/api/tasks", function(req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. 
  db.task.create({
    name: req.body.name,
    completed: 0
  }).then(function(result) {
    // We have access to the new task as an argument inside of the callback function
    res.json(result)
  })
    .catch(function(err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
});

  // PUT route for updating tasks. We can get the updated tasks data from req.body
  router.put("/api/tasks/:id", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.task.update({
      completed: req.body.completed
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
        res.json(err);
      });
  });

// DELETE route for deleting tasks. We can get the id of the task to be deleted from
// req.params.id
router.delete("/api/tasks/:id", function(req, res) {
  // We just have to specify which task we want to destroy with "where"
  db.task.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.json(result);
  });

});
  */
  
// Export routes for server.js to use.
module.exports = router;
  



// hidden in case delete of htmlroutes.js
//    header space

// THESE ARE OUR API ROUTES


// Require Express for the router
// var express = require("express");
// var path = require("path");

// // Create the express router, and export at the end of this file
// var htmlRoutes = express.Router();

// // Routes

// htmlRoutes.get("/", function(req,res){
//     res.sendFile(path.join(__dirname,"../html/index.html"))
// });

// htmlRoutes.get("/manager", function(req,res){
//     res.sendFile(path.join(__dirname,"../html/manager.html"))
// });

// htmlRoutes.get("/teampage", function(req,res){
//     res.sendFile(path.join(__dirname,"../html/team.html"))
// });


// // Export routes for server.js to use.
// module.exports = htmlRoutes;

