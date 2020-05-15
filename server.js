// Header space for easier readability

var express = require ("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
var db = require("./models");

// Import routes and give the server access to them.
// var routes = require("./routes/routes.js");
// app.use(routes);


//Place Routes Here
// app.get('/projects',(req,res)=>{ db.Project.findAll().then((data)=>{ res.json(data)})})

// app.get('/projectManagers',(req,res)=>{ db.ProjectManager.findAll().then((data)=>{ res.json(data)})})

//Find all items and include Departments
// app.get('/itemsWithDepartments',(req,res)=>{ 
//   db.Item.findAll({include: [db.Department]})
//   .then((data)=>{ res.json(data)})
// })


//Finds add departments with Items included
// app.get('/findAllDwithI',(req,res)=>{ 
//   db.Department.findAll({include: [db.Item]})
//   .then((data)=>{ res.json(data)})
// })

// Finds one department with Items included
// app.get('/findOneDwithI/:dept',(req,res)=>{ 
//   db.Department.findAll({
//     where : {department : req.params.dept},
//     include: [db.Item]
//   })
//   .then((data)=>{ res.json(data)})
// })



// Syncing our sequelize models and then starting our express app
// use db.sequelize.sync({ force: true }) if you want to drop table each time
db.sequelize.sync().then(function() {
  app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));
});
