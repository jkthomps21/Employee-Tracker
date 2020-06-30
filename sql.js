/*
===============  
MySQL Queries
===============
*/
  
const employees= 
 `SELECT employee.id, 
     CONCAT_WS(' - ', CONCAT_WS(' ', first_name, last_name), role.title) AS full_title, department.name
   FROM employee
   INNER JOIN role ON role.id = employee.role_id
   INNER JOIN department ON department.id = role.department_id`;
   
const managers = 
 `SELECT employee.id,
     CONCAT_WS(' - ', CONCAT_WS(' ', first_name, last_name), role.title) AS full_title,
     department.name
   FROM employee
   INNER JOIN role ON role.id = employee.role_id
   INNER JOIN department ON department.id = role.department_id
   WHERE manager_id IS NULL`;
 
const roles = "SELECT * FROM role";
 
const departments = "SELECT * FROM department";
 // id, name, title, dept, salary, manager
 
const all=
 `SELECT 
     CONCAT_WS(' ', a.first_name, a.last_name) AS Name,
     role.title AS Role, 
     department.name AS Department,
     role.salary AS Salary,
     CONCAT_WS(' ', b.first_name, b.last_name) as Manager
   FROM employee a
   LEFT JOIN employee b ON b.id = a.manager_id
   INNER JOIN role ON role.id = a.role_id
   INNER JOIN department ON department.id = role.department_id`;
 
 // const viewByDepartment
 
const byManager = 
 `SELECT 
     CONCAT_WS(' ', first_name, last_name) AS Name,
     role.title AS Role,
     department.name AS Department
   FROM employee
   INNER JOIN role ON role.id = employee.role_id
   INNER JOIN department ON department.id = role.department_id
   WHERE manager_id IS NULL`;
 
 // const viewManagers
 // Name, Title, Department
 
module.exports = {
  employees,
  managers,
  roles,
  departments,
  all,
  byManager
}