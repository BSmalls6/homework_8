const fs = require("fs");
const puppeteer = require('puppeteer')
const axios = require("axios")
const inquirer = require("inquirer");
// const github = require("./github")
const generateHTML = require("./ui")


// const user = "";
async function getInfo() {
    try {
        const info = [];
        const username = await inquirer.prompt({
            message: "What is the Username you wish to search?",
            name: "Username"


        });

        const colors = await inquirer.prompt({
            message: "What is your favorite color",
            name: "color"
        });
        info.push(username);
        info.push(colors);
        let user = username.Username;
        let color = colors.color;
        console.log(user);
        console.log (color);
        getUser(user, color);
       

    }
    catch (err) {
        console.log(err);
    }
};


function getUser(user, color) {
    // Get profile data of the user
    try {

        const queryURL = `https://api.github.com/users/${user}`;
        axios.get(queryURL).then(function (res) {
            res.data.color = color;
            details = {
                name: res.data.name,
                company: res.data.company,
                bio: res.data.bio,
                blog: res.data.blog,
                url: res.data.url,
                location: res.data.location,
                html_url: res.data.html_url,
                avatar: res.data.avatar_url,
                public: res.data.public_repos,
                followers: res.data.followers,
                following: res.data.following,
                color: res.data.color,
            }
            console.log(details);
           let html = generateHTML(details);
           printPDF(html);
        })


    }

    
    

catch(err) {
    console.log(err);
}
}


 
async function printPDF(html) {
    try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  await page.emulateMedia('screen');
  await page.pdf ({
 path: 'profile.pdf',
 format: 'A4',
 printBackground: true,
  });
  console.log('done');
 
  await browser.close();
  process.exit();
}

catch(e){
    console.log('our error', e)
}
}




getInfo();

