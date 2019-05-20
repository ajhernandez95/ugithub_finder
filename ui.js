const github = new Github();

const notFound = () => {
  const container = document.querySelector('.searchContainer');
  const search = document.querySelector('.search');

  const alert = document.createElement('div');
  alert.innerText = 'Sorry user is not found';
  alert.className = 'alert alert-danger';

  container.insertBefore(alert, search);
  setTimeout(() => {
    alert.style.display = 'none';
  }, 3000);
};

const userFound = user => {
  github.getUser(user).then(data => {
    const profile = document.getElementById('profile');
    profile.innerHTML = `
    <div class="card card-body">
    <div class="row">
      <div class="col-md-3">
        <img
          src="${data.profile.avatar_url}"
          class="img-fluid mb-2"
          alt=""
        />
        <a href="#" class="btn btn-primary btn-block">View Profile</a>
      </div>
      <div
        class="col-md-9
         "
      >
        <div class="badge badge-primary">Public Repos: 22</div>
        <div class="badge badge-secondary">Public Gists: 22</div>
        <div class="badge badge-success">Followers: 61</div>
        <div class="badge badge-info">Following: 80</div>
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
