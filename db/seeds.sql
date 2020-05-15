--  header space 
 
--  Mock Project Managers 
 INSERT INTO ProjectManagers (first_name, last_name, email, password)
 VALUES ("John", "Smith", "js@gmail", "123456"),
("Jane", "Jones", "jj@gmail", "123456"),
("Julie", "Prince", "jp@gmail", "123456");

-- Mock Projects 
INSERT INTO Projects (project_name)
VALUES ("Project 1"),
("Project 2"),
("Project 3"),
("Project 4"),
("Project 5");

-- Mock Team Members 
INSERT INTO TeamMembers (first_name, last_name, email, password)
VALUES ("Mary", "Mack", "mem@gmail", "123456"),
("Mo", "Nance", "mn@gmail", "123456"),
("Matt", "Murphy", "mm@gmail", "123456"),
("Nick", "Ramos", "nr@gmail", "123456"),
("Noel", "Cooper", "nc@gmail", "123456"),
("Nat", "Plath", "np@gmail", "123456"),
("Paul", "Tack", "pt@gmail", "123456"),
("Pam", "Updike", "pu@gmail", "123456"),
("Pat", "Perry", "pp@gmail", "123456");


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