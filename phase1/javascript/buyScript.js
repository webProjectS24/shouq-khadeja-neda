const main = document.querySelector("#main");
let accountNo;
let sellerId;
let itemNo;
let accounts = [];
let items = [];
document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  accountNo = urlParams.get("accountNo");
  itemNo = urlParams.get("itemNo");
  sellerId = urlParams.get("sellerId");
});

const form = document.querySelector("#order-form");
form.addEventListener("submit", buyproduct);

async function buyproduct(e) {
  e.preventDefault();
  const buyitem = formToObject(e.target);
  if (!localStorage.accounts) {
    const data = await fetch(userJson);
    accounts = await data.json();
    localStorage.accounts = JSON.stringify(accounts);
  } else {
    accounts = JSON.parse(localStorage.accounts);
  }
  if (!localStorage.items) {
    const data = await fetch(itemJson);
    items = await data.json();
    localStorage.items = JSON.stringify(items);
  } else {
    items = JSON.parse(localStorage.items);
  }
  purchaseItem(buyitem);
}
function formToObject(form) {
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }
  return data;
}
function purchaseItem(form) {
  const itemIndex = items.findIndex((item) => item.itemNo == itemNo);
  const customerIndex = accounts.findIndex(
    (account) => account.accountNo == accountNo
  );
  const sellerIndex = accounts.findIndex(
    (account) => account.accountNo == sellerId
  );
  //chech is found

  if (items[itemIndex].price * form.quantity > accounts[customerIndex].balance) {
    alert("Your balance is not enough!");

    window.location.href = `/main.html?accountNo=${accountNo}`;
  } else if (form.quantity > items[itemIndex].quantity) {
    alert("Quantity is greater than the number of available items ");
    window.location.href = `/main.html?accountNo=${accountNo}`;
  } else {
    items[itemIndex].sold += form.quantity;
    items[itemIndex].quantity -= form.quantity;
    accounts[customerIndex].balance -= items[itemIndex].price * form.quantity;
    accounts[sellerIndex].balance += items[itemIndex].price * form.quantity;

    if (!accounts[customerIndex].items) accounts[customerIndex].items = [];

    accounts[customerIndex].items.push(items[itemIndex]);

    let targetItem = accounts[customerIndex].items.find(
      (item) => item.itemNo == itemNo
    );
    if (targetItem) {
      targetItem.purchasedQuantity = form.quantity;
      let now = new Date();
      targetItem.purchaseDate = formatDate(now);
      targetItem.purchaseTime = formatTime(now);
    }

    if (!items[itemIndex].customers) items[itemIndex].customers = [];
    items[itemIndex].customers.push(accounts[customerIndex].username);

    localStorage.accounts = JSON.stringify(accounts);

    localStorage.items = JSON.stringify(items);

    alert("Successful puurchase");
    window.location.href = `/main.html?accountNo=${accountNo}`;
  }
}

function formatTime(date) {
  let h = date.getHours();
  let m = date.getMinutes();
  let formatingH = h % 12 || 12;
  let ampm = formatingH < 12 ? "PM" : "AM";
  return `${formatingH}:${m} ${ampm}`;
}

function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return `${d}-${m}-${y}`;
}
main.addEventListener("click", goToMain);
function goToMain() {
  window.location.href = `/main.html?accountNo=${accountNo}`;
}
