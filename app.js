// Init Github
const github = new Github();

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
        const container = document.querySelector(".searchContainer");
        const search = document.querySelector(".search");

        const alert = document.createElement("div");
        alert.innerText = "Sorry user is not found";
        alert.className = "alert alert-danger";

        container.insertBefore(alert, search);
      } else {
        // Show profile
      }
    });
  } else {
    // Clear profile
  }
});
