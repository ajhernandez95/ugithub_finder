class Github {
  constructor() {
    (this.client_id = 'db97eef0354f9c1a82a9'),
      (this.client_secret = 'cb262160e3023d2b486f19daafa728b21eb56b04');
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
