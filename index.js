const fs = require("fs");
const inquirer = require("inquirer");
const Github = require("./github")
const github = new Github();
async function getInfo() {
    try {
        const info = [];
        const username = await inquirer.prompt({
            message: "What is the Username you wish to search?",
            name: "Username"


        });

        const color = await inquirer.prompt({
            message: "What is your favorite color",
            name: "color"
        });
        info.push(username);
        info.push(color);
        let user = Object.values(info.username)
        console.log(user);
        getUserdata();

    }
    catch (err) {
        console.log(err);
    }
};

function getUserdata() {
    github.getUser(user)
        .then(data => {
            console.log(data);
            if (data.profile.message === 'Not Found') {
                // Show Alert that user is not Found
                console.log('User not found!');

            } else {
                // Show Profile
                // This will happen through ui class (ui.js)
                ui.generateHTML(data.profile);


            }
        });

}



getInfo();



