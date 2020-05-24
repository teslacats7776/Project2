--  header space 
 
--  Mock Users
 INSERT INTO Users (first_name, last_name, manager, email, password)
 VALUES ("John", "Smith", true, "js@gmail", "123456"),
("Jane", "Jones", true, "jj@gmail", "123456"),
("Julie", "Prince", true, "jp@gmail", "123456"),
("Mary", "Mack", false, "mem@gmail", "123456"),
("Mo", "Nance", false, "mn@gmail", "123456"),
("Matt", "Murphy", false, "mm@gmail", "123456"),
("Nick", "Ramos", false, "nr@gmail", "123456"),
("Noel", "Cooper", false, "nc@gmail", "123456"),
("Nat", "Plath", false, "np@gmail", "123456"),
("Paul", "Tack", false, "pt@gmail", "123456"),
("Pam", "Updike", false, "pu@gmail", "123456"),
("Pat", "Perry", false, "pp@gmail", "123456");

-- Mock Projects 
INSERT INTO Projects (project_name)
VALUES ("Project 1"),
("Project 2"),
("Project 3"),
("Project 4"),
("Project 5");


-- Mock Tasks 
INSERT INTO Tasks (task_name)
VALUES ("Models"),
("Set up heroku database"),
("Convert vanilla jScript to jQuery"),
("Set Up Routes"),
("Set Up Server"),
("User Interface"),
("Design"),
("Front End Javascript"),
("Handlebars")