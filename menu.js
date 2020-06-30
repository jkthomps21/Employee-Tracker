/*
============
Menu Queries
============
*/

const startOptions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            {
                name: "View Employees",
                value: "View",
            },
            {
                name: "Manage Employees",
                value: "Manage",
            },
            {
                name: "Manage Departments",
                value: "Department",
            },
            {
                name: "Exit application",
                value: "Exit"
            }
        ]
    }
]

const viewOptions = [
    {
        type: "list",
        message: "Please choose from the following:",
        name: "choice",
        choices: [
            {
                name: "View All Employees",
                value: "All",
            },
            {
                name: "View Managers",
                value: "Managers",
            },
            {
                name: "Return to Main Menu",
                value: "Main",
            }
        ]
    }
]

const manageOptions = [
    {
        type: "list",
        message: "Please choose from the following:",
        name: "choice",
        choices: [
            {
                name: "Add Employee",
                value: "Add",
            },
            {
                name: "Remove Employee",
                value: "Remove",
            },
            {
                name: "Update Employee Information",
                value: "Update",
            },
            {
                name: "Return to Main Menu",
                value: "Main",
            }
        ]
    }
]

const departmentOptions = [
    {
        type: "list",
        message: "Please choose from the following:",
        name: "choice",
        choices: [
            {
                name: "View Departments",
                value: "Departments",
            },
            {
                name: "View Roles",
                value: "Roles",
            },
            {
                name: "Add/Remove Department",
                value: "manageDepartment",
            },
            {
                name: "Add/Remove Roles",
                value: "manageRoles",
            },
            {
                name: "Return to Main Menu",
                value: "Main",
            }
        ]
    }
]
  
module.exports = {
    startOptions,
    viewOptions,
    manageOptions,
    departmentOptions,
}