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

function displayItems(items) {
  let htmlForItems = items.map((item) => itemToHTML(item)).join(" ");
  itemsContainer.innerHTML = htmlForItems;
}
function itemToHTML(item) {
  return `
    <div class="card" id="item-card">
    <div class="product-info">
        <img src="${item.imageUrl}">
            <h2 class="product-title">${item.name}</h2>
            <p class="product-description">${item.description}</p>
            <p class="item-available">Currently Available: ${item.quantity}</p>
            <p class="product-price">${item.price} QAR</p>
            <p class="item-status">Item Status: ${
              item.quantity == 0 ? "Sold" : "Available"
            }</p>
            <form class="hidden" id="id-${item.itemNo}">
            <label for="quantity">Update Quantity: </label>
            <input type="number" name="quantity" id="quantity">
            <input type="submit">
            </form>
        </div>
        <div class="product-btns">
        <a class="item-button" href="./itemDetails.html?itemNo=${
          item.itemNo
        }&accountNo=${accountNo}">View Details</a>
        <a class="item-button" onclick="update(${
          item.itemNo
        },${accountNo})">Update Quantity</a>
        </div>
    </div>
    `;
}
uploaditem.addEventListener("click", NavigateToUploadItem);
function NavigateToUploadItem() {
  window.location.href = `../seller/uploadItem.html?accountNo=${accountNo}`;
}
function update(itemId) {
  itemNo = itemId;
  let form = document.querySelector(`#id-${itemNo}`);
  form.classList.remove("hidden");
  form.addEventListener("submit", updateItem);
}
function updateItem(e) {
  e.preventDefault();
  const form = formToObject(e.target);
  let index = items.findIndex((item) => item.itemNo == itemNo);
  if (form.quantity < 0) {
    alert("Enter positive number please");
  } else {
    items[index].quantity = form.quantity;
    localStorage.items = JSON.stringify(items);
    window.location.href = `./sellerHistory.html?accountNo=${accountNo}`;
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
searchinput.addEventListener("input", filteredProductsList);
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
};
function filteredProductsList() {
  let filteredItems = items.filter((item) => findFiltereditems(item));
  displayItems(filteredItems);
}
function findFiltereditems(item) {
  let input = searchinput.value.toUpperCase();
  if (item.name.toUpperCase().includes(input)) return true;
  else return false;
}
main.addEventListener("click", goToMain);
function goToMain() {
  window.location.href = `../../NSK/main.html?accountNo=${accountNo}`;
}
