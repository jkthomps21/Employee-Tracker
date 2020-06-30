const inquirer = require("inquirer");
const util = require("util");
const mysql = require("mysql");
const table = require("console.table");
const menuJS = require("./menu.js");
const sqlOptions = require("./sql.js");
const manageJS = require("./manage.js");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // Make sure to put in your password below
    password: "Tenn1s!!",
    database: "employee_trackDB"
});

const query = util.promisify(connection.query).bind(connection);

connection.connect(function(err) {
    if (err) throw err;
    console.log("You're connected as " + connection.threadId + ".\n");
    console.log("Welcome to your employee tracker! :)\nHere you can view, manage, and edit your employees, roles, and departments.\n");
    startApp();
});

function userPrompt(prompt) {
    return inquirer.prompt(prompt);
}

async function startApp() {
  try {
    let { choice } = await userPrompt(menuJS.startOptions);

    switch (choice) {
      case "View":
        console.log("View Menu\n");
        await viewMenu();
        break;
      case "Manage":
        console.log("Manage Menu\n");
        await manageMenu();
        break;
      case "Department":
        console.log("Department Menu\n");
        await departmentMenu();
        break;
      case "Exit":
        console.log("You are leaving the application.");
        connection.end();
        return;
    }
    await startApp();
  } 
  catch (err) {
    console.log(err);
  }
}

async function viewMenu() {
  try {
    let { choice } = await userPrompt(menuJS.viewOptions);

    switch (choice) {
      case "All":
        console.table(await query(sqlOptions.all))
        break;
      case "Managers":
        console.table(await query(sqlOptions.managers));
        break;
      case "Main":
        break;
    }
  } 
  catch (err) {
    console.log(err);
  }
}

async function manageMenu() {
  try {
    let { choice } = await userPrompt(menuJS.manageOptions);
    let employees = await query(sqlOptions.employees);
    let managers = await query(sqlOptions.managers);
    let roles = await query(sqlOptions.roles);

    switch (choice) {
      case "Add":
        let newEmployee = await userPrompt(manageJS.addEmployee(roles, managers));
        await query("INSERT INTO employee SET ?", {
          first_name: newEmployee.first_name,
          last_name: newEmployee.last_name,
          role_id: newEmployee.role_id,
          manager_id: newEmployee.manager_id
        });
        break;
      case "Remove":
        let removeEmployee = await userPrompt(manageJS.removeEmployee(employees));
        if (removeEmployee.confirmRemove) {
          console.log("Employee Removed");
          await query("DELETE FROM employee WHERE ?", { id: removeEmployee.employeeId });
        }
      case "Update":
        let updateEmployee = await userPrompt(manageJS.updateEmployee(employees, roles, managers));
        switch (updateEmployee.choice) {
          case "Name":
            await query("UPDATE employee SET ? WHERE ?",
            [
              {
                first_name: updateEmployee.newFirst,
                last_name: updateEmployee.newLast
              },
              { id: updateEmployee.employeeId }
            ]);
            break;
          case "Role":
            await query("UPDATE employee SET ? WHERE ?",
            [
              {
                manager_id: updateEmployee.managerId,
                role_id: updateEmployee.roleId
              },
              { id: updateEmployee.employeeId }
            ]);
            break;
        }
        break;
      case "Main":
        break;
    }
  } 
  catch (err) {
    console.log(err);
  }
}

async function departmentMenu() {
  try {
    let { choice } = await userPrompt(menuJS.departmentOptions);
    let roles = await query(sqlOptions.roles);
    let departments = await query(sqlOptions.departments);
    
    switch (choice) {
      case "Departments":
        console.table(departments);
        break;
      case "Roles":
        console.table(roles);
        break;
      case "manageDepartment":
        let updateDepartments = await userPrompt(manageJS.updateDepartments(departments));
        switch (updateDepartments.choice) {
          case "Add":
            await query("INSERT INTO department SET ?", {
              name: updateDepartments.addName
            });
            break;
          case "Remove":
            if (updateDepartments.confirmRemove) {
              console.log("Department removed.");
              await query("DELETE FROM department WHERE ?", { id: updateDepartments.removeId });
            }
        }
        break;
      case "updateRoles":
        let updateRoles = await userPrompt(manageJS.updateRoles(roles, departments));
        console.log(updateRoles);
        switch (updateRoles.choice) {
          case "Add":
            await query("INSERT INTO role SET ?", {
              title: updateRoles.addName,
              salary: updateRoles.newSalary,
              department_id: updateRoles.newDepartmentId
            });
            break;
          case "Remove":
            console.log("Employee Removed");
            await query("DELETE FROM role WHERE ?", { id: updateRoles.removeId });
        }
        break;
      case "Main":
        break;
    }
  } 
  catch (err) {
    console.log(err);
  }
}

