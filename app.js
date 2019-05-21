// Init user
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        notFound();
        ui.clearProfile();
      } else {
        // Show profile
        ui.showProfile(data.profile);
        // userFound(e.target.value);
      }
    });
  } else {
    ui.clearProfile();
  }
});
