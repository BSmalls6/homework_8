class Github {
    constructor() {
      // Following client id is generated when you register your GitHub aaplication for OAuth
      this.client_id = '13db30216a6e8642a8cb';
      this.client_secret = 'dbd5ba3d6ed62e8564e3a0ea05c956ecefdd403c';
      this.count = 5;
      this.repos_sort = 'created: asc';
    }
  
    // Get user
    async getUser(user) {
      // Get profile data of the user
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      // Get the repositories of the user
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      const repos = await repoResponse.json();
  
      // return object
      return {
        // profile: profile,
        // repos: repos
        profile,
        repos
      }
  
  
    }
  
  
  
  
  }
  