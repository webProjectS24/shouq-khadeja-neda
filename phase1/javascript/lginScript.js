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
  // displayProducts(products);
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
    alert("Username or password is incorrect, please try again");
  } else {
    accounts[index].isLogged = true;
    localStorage.accounts = JSON.stringify(accounts);
    window.location.href = `/main.html?accountNo=${accounts[index].accountNo}`;
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

const history = document.querySelector("#history");
history.addEventListener("click", ToHistory);
function ToHistory() {
  alert("you need to log in");
}
