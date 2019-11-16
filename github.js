module.exports =
    
        function getUser(user) {
            // Get profile data of the user
            try {

                const queryURL = `https://api.github.com/users/${user}`;
                axios.get(queryURL).then(function (res) {
                    var details = {
                        name: res.data.name,
                        company: res.data.company,
                        bio: res.data.bio,
                        blog: res.data.blog,
                        html_url: res.data.html_url,
                        avatar: res.data.avatar_url,
                        public: res.data.public_repos,
                        followers: res.data.followers,
                        following: res.data.following,
                    }
                    console.log(details);

                })


            }

            
            
        
        catch(err) {
            console.log(err);
        }
    }


