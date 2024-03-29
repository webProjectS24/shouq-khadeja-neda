//items in the history container to add the items to that div
const container = document.querySelector(".history-container");
//items link of the json file to display the items of a specified customer
let accountNo;
let accounts = [];
//i have the items as property now in the customer account after he bought the item
document.addEventListener("DOMContentLoaded", function () {
  const Params = new URLSearchParams(window.location.search);
  accountNo = Params.get("accountNo");
  loadCustomers();
});

async function loadCustomers() {
  if (!localStorage.accounts) {
    const data = await fetch(accountJson);
    accounts = await data.json();
    localStorage.accounts = JSON.stringify(accounts);
  } else {
    accounts = JSON.parse(localStorage.accounts);
  }
  displayitems();
}

function displayitems() {
  const customer = accounts.find((account) => account.accountNo == accountNo);
  console.log(customer);
  if (!customer.items) alert("No purchased items yet");
  else {
    const items = customer.items;
    console.log(items);
    const htmlForItems = items.map((item) => itemToHTML(item)).join(" ");
    container.innerHTML = htmlForItems;
  }
}

function itemToHTML(item) {
  return `
    <div class="card">
      <img src="${item.imageUrl}">
      <h2 class="title">${item.name}</h2>
      <p class="description">${item.description}</p>
      <p class="price">QTR ${item.price}</p>
      <p class="quantity">purchased Quantity: ${item.purchasedQuantity}</p>
    </div>
  `;
}
