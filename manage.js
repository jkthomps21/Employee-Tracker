/*
================
Manage Employees
================
*/
  
function addEmployee(roles, managers) {
    let options = [
        {
            type: 'input',
            message: "What is the new employee's first name?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the new employee's last name?",
            name: "last_name"
        },
        {
            type: "list",
            message: "What role will the new employee have?",
            name: "role_id",
            choices: () => {
                let array = [];
                for (var i = 0; i < roles.length; i++) {
                    array.push(roles[i].title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of roles) {
                    if (entry.title == answer)
                        return entry.id;
                }
            },
        },
        {
            type: "list",
            message: "Who is the new employee's manager?",
            name: "manager_id",
            choices: () => {
                let array = [];
                for (var i = 0; i < managers.length; i++) {
                    array.push(managers[i].full_title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of managers) {
                    if (entry.full_title == answer)
                        return entry.id;
                }
            },
        }
    ]
    return options;
}
  
function removeEmployee(employees) {
    let options = [
        {
            type: "list",
            message: "Which employee would you like to remove?",
            name: "employeeId",
            choices: () => {
                let array = [];
                for (var i = 0; i < employees.length; i++) {
                    array.push(employees[i].full_title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of employees) {
                    if (entry.full_title == answer)
                        return entry.id;
                }
            },
        },
        {
            type: "confirm",
            message: "Are you sure?",
            name: "confirmRemove"
        }
    ]
    return options;
}

function updateEmployee(employees, roles, managers) {
    let options = [
        {
            type: "list",
            message: "Which employee would you like to update?",
            name: "employeeId",
            choices: () => {
                let array = [];
                for (var i = 0; i < employees.length; i++) {
                    array.push(employees[i].full_title);
                }
                array.push("Cancel Update\n")
                return array;
            },
            filter: (answer) => {
                for (entry of employees) {
                    if (entry.full_title == answer)
                        return entry.id;
                }
            },
        },
        {
            type: "list",
            message: "What information would you like to update?",
            name: "choice",
            choices: [
                {
                    name: "Update Employee Name",
                    value: "Name"
                },
                {
                    name: "Update Employee Role",
                    value: "Role"
                },
                {
                    name: "Cancel Update",
                    value: "Main"
                }
            ],
            when: (answers) => answers.employeeId != "Cancel Update\n"
        },
        {
            type: "input",
            message: "What is the employee's updated first name?",
            name: "newFirst",
            when: (answers) => answers.choice == "Name"
        },
        {
            type: "input",
            message: "What is the employee's updated last name?",
            name: "newLast",
            when: (answers) => answers.choice == "Name"
        },
        {
            type: "list",
            message: "What is the employee's updated role?",
            name: "roleId",
            choices: () => {
                let array = [];
                for (var i = 0; i < roles.length; i++) {
                    array.push(roles[i].title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of roles) {
                    if (entry.title == answer)
                        return entry.id;
                }
            },
            when: (answers) => answers.choice == "Role"
        },
        {
            type: "list",
            message: "Who will the emplyee's updated manager?",
            name: "managerId",
            choices: () => {
                let array = [];
                for (var i = 0; i < managers.length; i++) {
                    array.push(managers[i].full_title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of managers) {
                    if (entry.full_title == answer)
                        return entry.id;
                }
            },
            when: (answers) => (answers.choice == "ROLE") && !answers.managerConfirm
        }
    ]
    return options;
}
  
/* 
==================
Manage Departments
==================
*/
  
function updateDepartments(departments) {
    let options = [
        {
            type: "list",
            message: "Please choose from the following:",
            name: "choice",
            choices: [
                {
                    name: "Add Department",
                    value: "Add"
                },
                {
                    name: "Remove Department",
                    value: "Remove"
                },
                {
                    name: "Return to Main Menu",
                    value: "Main"
                },
            ]
        },
        {
            type: "list",
            message: "Please choose the department you'd like to remove.",
            name: "removeId",
            choices: () => {
                let array = [];
                for (var i = 0; i < departments.length; i++) {
                    array.push(departments[i].name);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of departments) {
                    if (entry.name == answer)
                        return entry.id;
                }
            },
            when: (answers) => answers.choice == "Remove"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            when: (answers) => answers.choice == "Remove"
        },
        {
            type: "input",
            message: "What is the name of the department you'd like to add?",
            name: "addDapartment",
            when: (answers) => answers.choice == "Add"
        },
    ]
    return options;
}

function updateRoles(roles, departments) {
    let options = [
        {
            type: "list",
            message: "Please choose from the following:",
            name: "choice",
            choices: [
                {
                    name: "Add a Role",
                    value: "Add"
                },
                {
                    name: "Remove a Role",
                    value: "Remove"
                },
                {
                    name: "Return to Main Menu",
                    value: "Main"
                }
            ]
        },
        {
            type: "list",
            message: "Please choose the role you'd like to remove.",
            name: "removeId",
            choices: () => {
                let array = [];
                for (var i = 0; i < roles.length; i++) {
                    array.push(roles[i].title);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of roles) {
                    if (entry.title == answer)
                        return entry.id;
                }
            },
            when: (answers) => answers.choice == "Remove"
        },
        {
            type: "confirm",
            message: "Are you sure?",
            when: (answers) => answers.choice == "Remove"
        },
        {
            type: "input",
            message: "What is the name of the new role?",
            name: "addName",
            when: (answers) => answers.choice == "Add"
        },
        {
            type: "list",
            message: "Which department does the new role belong to?",
            name: "newDepartmentId",
            choices: () => {
                let array = [];
                for (var i = 0; i < departments.length; i++) {
                    array.push(departments[i].name);
                }
                return array;
            },
            filter: (answer) => {
                for (entry of departments) {
                    if (entry.name == answer)
                        return entry.id;
                }
            },
            when: (answers) => answers.choice == "Add"
        },
        {
            type: "input",
            message: "What is the salary for this new role?",
            name: "newSalary",
            when: (answers) => answers.choice == "Add"
        },
    ]
    return options;
}

module.exports = {
    addEmployee,
    removeEmployee,
    updateEmployee,
    updateDepartments,
    updateRoles
}