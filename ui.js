const github = new Github();

const notFound = () => {
  const container = document.querySelector(".searchContainer");
  const search = document.querySelector(".search");

  const alert = document.createElement("div");
  alert.innerText = "Sorry user is not found";
  alert.className = "alert alert-danger";

  container.insertBefore(alert, search);
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
};

const userFound = user => {
  github.getUser(user).then(data => {
    const profile = document.getElementById("profile");
    const followers = data.profile.followers_url;
    console.log(followers);
    profile.innerHTML = `
    <div class="card card-body">
    <div class="row">
      <div class="col-md-3">
        <img
          src="${data.profile.avatar_url}"
          class="img-fluid mb-3"
          alt=""
        />
        <a href="${
          data.profile.html_url
        }" class="btn btn-primary btn-block" target="_blank">View Profile</a>
      </div>
      <div
        class="col-md-9
         "
      >
        <div class="badge badge-primary">Public Repos: ${
          data.profile.public_repos
        }</div>
        <div class="badge badge-secondary">Public Gists: ${
          data.profile.public_gists
        }</div>
        <div class="badge badge-success">Followers: ${
          data.profile.followers
        }</div>
        <div class="badge badge-info">Following: ${data.profile.following}</div>
        <br />
        <br />
        <div class="list-group">
          <div class="list-group-item">company: ${data.profile.company}</div>
          <div class="list-group-item">Website/Blog: ${data.profile.blog}</div>
          <div class="list-group-item">Location: ${data.profile.location}</div>
          <div class="list-group-item">
            Member Since: ${data.profile.created_at}
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    console.log(data);
  });
};

class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class='row'>
          <div class='col-md-3'>
            <img class='img-fluid mb-3' src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block">View Profile</a>
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
            <span class="badge badge-primary">Following Repos: ${
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
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
