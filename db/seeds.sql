--  header space 
 
--  Mock Project Managers 
 INSERT INTO ProjectManagers (first_name, last_name, manager, email, password)
 VALUES ("John", "Smith", true, "js@gmail", "123456"),
("Jane", "Jones", true, "jj@gmail", "123456"),
("Julie", "Prince", true, "jp@gmail", "123456");

-- Mock Projects 
INSERT INTO Projects (project_name)
VALUES ("Project 1"),
("Project 2"),
("Project 3"),
("Project 4"),
("Project 5");

-- Mock Team Members 
INSERT INTO TeamMembers (first_name, last_name, team, email, password)
VALUES ("Mary", "Mack", true, "mem@gmail", "123456"),
("Mo", "Nance", true, "mn@gmail", "123456"),
("Matt", "Murphy", true, "mm@gmail", "123456"),
("Nick", "Ramos", true, "nr@gmail", "123456"),
("Noel", "Cooper", true, "nc@gmail", "123456"),
("Nat", "Plath", true, "np@gmail", "123456"),
("Paul", "Tack", true, "pt@gmail", "123456"),
("Pam", "Updike", true, "pu@gmail", "123456"),
("Pat", "Perry", true, "pp@gmail", "123456");


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