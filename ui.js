class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class='row'>
          <div class='col-md-3'>
            <img class='img-fluid mb-3' src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class='col-md-9'>
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-primary">Following: ${
              user.following
            }</span>
            <br>
            <br>
            <ul class='list-group'>
              <li class='list-group-item'>Company: ${user.company}</li>
              <li class='list-group-item'>Website/Blog: ${user.blog}</li>
              <li class='list-group-item'>Location: ${user.location}</li>
              <li class='list-group-item'>Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    console.log(repos);
    repos.forEach(repo => {
      document.getElementById('repos').innerHTML += `
      <div class='card card-body mb-2'>
        <div class='row'>
          <div class='col-md-6'>
          <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
          </div>
          <div class='col-md-6'>
          <span class='badge badge-primary'>Stars: ${
            repo.stargazers_count
          }</span>
          <span class='badge badge-secondary'>Watchers: ${
            repo.watchers_count
          }</span>
          <span class='badge badge-info'>Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `;
    });
  }

  showAlert(msg, className) {
    this.clearAlert();
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    const alert = document.createElement('div');
    alert.innerText = msg;
    alert.className = className;

    container.insertBefore(alert, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
