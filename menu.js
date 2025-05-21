const inquirer = require('inquirer');

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Please choose an action:',
        choices: ['View All Employees', 'Add Employee', 'Exit']
    }).then((answers) => {
        switch (answers.action) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
        }
    });
}

function viewAllEmployees() {
    console.log('Displaying all employees...');
    mainMenu(); // Return to main menu
}

function addEmployee() {
    console.log('Adding an employee...');
    mainMenu(); // Return to main menu
}

module.exports = { mainMenu };