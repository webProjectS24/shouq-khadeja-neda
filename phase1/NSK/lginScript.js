let userJson = "../data/user.json";
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", submitForm);
let accounts = [];
document.addEventListener("DOMContentLoaded", function () {
  loadLogins();
});

async function loadLogins() {
  if (!localStorage.accounts) {
    const data = await fetch(userJson);
    accounts = await data.json();
    localStorage.accounts = JSON.stringify(accounts);
  } else {
    accounts = JSON.parse(localStorage.accounts);
  }
}

function submitForm(e) {
  //alert("entered");
  e.preventDefault();
  const formData = formToObject(e.target);
  console.log(formData.password);
  const index = accounts.findIndex(
    (account) => account.username == formData.username
  );
  if (!accounts[index] || accounts[index].password != formData.password) {
    alert("User name not found or password is incorrect");
  } else {
    accounts[index].isLogged = true;
    console.log(accounts[index].isLogged); //is working
    localStorage.accounts = JSON.stringify(accounts);
  }
}

function formToObject(form) {
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  return data;
}
// loginForm.addEventListener("change", (event) => {
//   event.preventDefault();
//   const formData = formToObject(loginForm);
//   const username = formData.username;
//   console.log(username);
//   const userIndex = users.findIndex((user) => user.username === username);
//   console.log(userIndex);
//   if (userIndex !== -1) {
//     users[userIndex].isLogged = true;
//     localStorage.setItem("user", JSON.stringify(users));
//     console.log(`${username} is now marked as logged in.`);
//   } else {
//     console.log("User not found.");
//   }
// });
