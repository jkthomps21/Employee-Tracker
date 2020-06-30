USE employee_trackDB;

INSERT INTO department (name)
VALUES ("Sales"),("Human Resources"),("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 1),("Salesperson", 34000, 1),("Sales Intern", 25000, 1),("HR Lead", 72000, 2),("HR Intern", 25000, 2),("Accountant", 60000, 3),("Team Lead - Accounting", 75000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ralph", "Lauren", 1),("Paige","Aamoth", 2),("Burt", "Jones", 4),("Jannette","Dennison", 1),("Martin","Wayans", 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jenny", "Thomas", 2, 1),("Terrence", "Philips", 5, 3),("Toni", "Thompson", 5, 3),("Lisa", "Cruise", 3, 2),("Easton", "Allen", 6, 5),("Elizabeth", "Grey", 6, 5);