USE employee_trackDB;

INSERT INTO department (name)
VALUES ("Sales"),("Human Resources"),("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 1),("Salesperson", 34000, 1),("Sales Intern", 25000, 1),("HR Lead", 72000, 2),("HR Intern", 25000, 2),("Accountant", 60000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ralph", "Lauren", 1),("Paige","Aamoth",3),("Burt", "Jones",5),("Jannette","Dennison",8),("Martin","Wayans", 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jenny", "Thomas", 2, 1),("Terrence", "Philips", 4, 2),("Toni", "Thompson", 4, 2),("Lisa", "Cruise", 2, 1),("Easton", "Allen", 7, 3),("Elizabeth", "Grey", 9, 4);