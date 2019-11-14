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
console.log(Object.values(user));
}
    catch (err){
        console.log (err);
    }
};

github.getUser(user)
.then(data => {
  console.log(data);
  if(data.profile.message === 'Not Found') {
      // Show Alert that user is not Found
      // This will happen through ui class (ui.js)
      ui.showAlert('User not found!', 'alert alert-danger');

  } else {
      // Show Profile
      // This will happen through ui class (ui.js)
      ui.showProfile(data.profile);

      // Show repositories
      ui.showRepos(data.repos);
  }
})

} else {
// Clear the profile
// This will happen through ui class (ui.js)
ui.clearProfile();
}
})


getUsername();

