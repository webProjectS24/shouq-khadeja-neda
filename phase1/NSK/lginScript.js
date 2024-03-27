let userJson = "../data/user.json";
userJson = JSON.parse(userJson);
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("change", (event) => {
  event.preventDefault();
  const formData = formToObject(loginForm);
  const username = formData.username;
  console.log(username);
  const userIndex = users.findIndex((user) => user.username === username);
  console.log(userIndex);
  if (userIndex !== -1) {
    users[userIndex].isLogged = true;
    localStorage.setItem("user", JSON.stringify(users));
    console.log(`${username} is now marked as logged in.`);
  } else {
    console.log("User not found.");
  }
});
