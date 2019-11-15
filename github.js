module.exports = 
class Github {
    constructor() {
        this.client_id = '6a7d6b368fe91a33a157';
        this.client_secret = '46ee194c1578cc74b0eb4c900a9e560bb43fa489';
        this.count = 5;
        this.repos_sort = 'created: asc';
    }

    // Get user
    async getUser(user) {
        // Get profile data of the user
        try {
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const profile = await profileResponse.json();

            console.log(profile);

            // return object
            return {
                profile
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};

