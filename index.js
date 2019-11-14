const fs = require("fs");
const inquirer = require("inquirer");
// const github = new Github;
async function getUsername() {
    try {

        const username = await inquirer.prompt({
            message: "What is the Username you wish to search?",
            name: "Username"


        });
        user = Object.values(username)
        let userN = JSON.stringify(user);
        console.log(userN);
    }
    catch (err) {
        console.log(err);
    }
};
getUsername();

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
                ui.showProfile(data.profile);

                // Show repositories
                ui.showRepos(data.repos);
            }
        });

}





