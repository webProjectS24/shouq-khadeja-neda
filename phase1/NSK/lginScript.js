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
  console.log(window.location.href);
  //telling the browser to navigate to the new URL
  window.location.href = `./main.html?accountNo=${accounts[index].accountNo}`;
}

function formToObject(form) {
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  return data;
}
