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

// =============================================================================================== //

// I can create my association here OR in the model itself.
// See items model to for definition in model.
db.Item.belongsTo(db.Department,{
  foreignKey: {allowNull: true},
  constraints: false
});

// Set up Department has many items association
db.Department.hasMany(db.Item)  

// Same as above using default constraints
//db.Item.belongsTo(db.Department);



// ================================================================================================== //



//Place Routes Here
app.get('/departments',(req,res)=>{ db.Department.findAll().then((data)=>{ res.json(data)})})

app.get('/items',(req,res)=>{ db.Item.findAll().then((data)=>{ res.json(data)})})

//Find all items and include Departments
app.get('/itemsWithDepartments',(req,res)=>{ 
  db.Item.findAll({include: [db.Department]})
  .then((data)=>{ res.json(data)})
})


//Finds add departments with Items included
app.get('/findAllDwithI',(req,res)=>{ 
  db.Department.findAll({include: [db.Item]})
  .then((data)=>{ res.json(data)})
})

// Finds one department with Items included
app.get('/findOneDwithI/:dept',(req,res)=>{ 
  db.Department.findAll({
    where : {department : req.params.dept},
    include: [db.Item]
  })
  .then((data)=>{ res.json(data)})
})



// Syncing our sequelize models and then starting our express app
// use db.sequelize.sync({ force: true }) if you want to drop table each time
db.sequelize.sync().then(function() {
  app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));
});
