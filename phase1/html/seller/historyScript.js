const itemsContainer = document.querySelector("#items-container");
const itemCard = document.querySelector("#item-card");
const itemJson = "../data/item.json";
let items = [];
let accounts = [];
let accountNo;
document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  accountNo = urlParams.get("accountNo");
  loadItems();
});
async function loadItems() {
  if (!localStorage.items) {
    const data = await fetch(itemJson);
    const items = await data.json();
    localStorage.items = JSON.stringify(items);
  } else {
    items = JSON.parse(localStorage.items);
  }
  if (!checkAccountisLogged(accountNo)) {
    return;
  }
  let filteredItems = items.find((item) => item.sellerId == accountNo);
  displayItems(filteredItems);
}
function findAccountItems(accounts) {
  let account = accounts.find((account) => account.accountNo == accountNo);
  if (!account.isLogged || account == null) {
    alert("please log in first");
    window.location.href = `../login.html`;
    return false;
  } else {
    return true;
  }
}
function displayItems(items) {
  let htmlForItems = items.map((item) => itemToHTML(item)).join(" ");
  itemsContainer.innerHTML = htmlForItems;
}
function itemToHTML(item) {
  return `
    <div class="items-container" id="items-container">
    <div class="item-card" id="item-card">
        <img class="item-image" src="${item.imageUrl}">
        <div class="item-details">
            <h2 class="item-title">${item.name}</h2>
            <p class="item-description">${item.description}</p>
            <p class="item-quantity">Available: ${item.quantity}</p>
            <p class="item-price">${item.price} QAR</p>
            <p class="item-status">${
              item.status == "On Sale" ? "Available" : "Sold"
            }</p>
        </div>
        <a class="item-button" href="../seller/itemDetails.html?itemNo=${
          item.itemNo
        }&accountNo=${accountNo}">View Details</a>
    </div>
    `;
}
