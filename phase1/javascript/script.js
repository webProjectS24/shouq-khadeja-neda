const productsContainter = document.querySelector("#products-container");
const sellerbtns = document.querySelector("#seller-btns");
const logoutbtn = document.querySelector("#logout");
const purchasehistory = document.querySelector("#history");
let search = document.querySelector(".search-box");
let searchinput = document.querySelector("#search-input");
let uploadProduct = document.querySelector("#upload-product");
let ProductsHistory = document.querySelector("#Products-history");

const itemJson = "../data/item.json";
const userJson = "../data/user.json";
let products = [];
let accounts = [];
let acctType;
let accountNo;

document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  accountNo = urlParams.get("accountNo");
  loadProducts();
});

async function loadProducts() {
  if (!localStorage.accounts) {
    const data = await fetch(userJson);
    const accounts = await data.json();
    localStorage.accounts = JSON.stringify(accounts);
  } else {
    accounts = JSON.parse(localStorage.accounts);
    if (accountNo != null) {
      logoutbtn.classList.remove("hidden");
      let account = accounts.find((account) => account.accountNo == accountNo);
      acctType = account.acctType;
    }
  }
  if (!localStorage.items) {
    const data = await fetch(itemJson);
    const products = await data.json();
    localStorage.items = JSON.stringify(products);
  } else {
    if (acctType == "seller") {
      sellerbtns.classList.remove("hidden");
    }
    products = JSON.parse(localStorage.items);
  }
  let filteredProducts = products.filter((product) => product.quantity != 0);
  let filtersellerPorducts = filteredProducts.filter(product => product.sellerId != accountNo)
  displayProducts(filtersellerPorducts);
}
function displayProducts(products) {
  let htmlForProducts = products
    .map((product) => productToHTML(product))
    .join(" ");
  productsContainter.innerHTML = htmlForProducts;
}
function productToHTML(product) {
  return `
                <div class="card" id="">
                    <div class="product-info">
                        <img src="${product.imageUrl}" alt="" />
                        <h2 class="product-title">${product.name}</h2>
                        <p class="product-price">${product.price} QAR</p>
                        <p class="product-description"><b>Description:</b> ${product.description}</p>
                        <p class="product-quantity"><b>Quantity:</b> ${product.quantity}</p>
                    </div>
                    <button class="buy-btn" onclick="buyProduct(${product.itemNo},${product.sellerId})">Buy this item</button> 
                </div >
    `;
}

//seller btns
uploadProduct.addEventListener("click", navigateToForm);
ProductsHistory.addEventListener("click", navigateToHistory);
purchasehistory.addEventListener("click", ToHistory);
function navigateToForm() {
  window.location.href = `/html/seller/uploadItem.html?accountNo=${accountNo}`;
}
function ToHistory() {
  window.location.href = `/html/customer/History.html?accountNo=${accountNo}`;
}
//search;
searchinput.addEventListener("input", filteredProductsList);
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
};
function filteredProductsList() {
  let filteredProducts = products.filter((product) =>
    findFilteredProducts(product)
  );
  displayProducts(filteredProducts);
}
function findFilteredProducts(product) {
  let input = searchinput.value.toUpperCase();
  if (product.name.toUpperCase().includes(input)) return true;
  else return false;
}
// navlist
function navigateToHistory() {
  window.location.href = `/html/seller/sellerHistory.html?accountNo=${accountNo}`;
}
function buyProduct(itemNo, sellerId) {
  let index = accounts.findIndex((account) => account.isLogged == true);
  if (index == -1) {
    alert("please log in first");
    window.location.href = `/html/login.html`;
  } else {
    window.location.href = `/html/customer/buyProduct.html?accountNo=${accounts[index].accountNo}&itemNo=${itemNo}&sellerId=${sellerId}`;
  }
}
// =======
//logout button
logoutbtn.addEventListener("click", logOut);
function logOut() {
  let index = accounts.findIndex((account) => account.accountNo == accountNo);
  accounts[index].isLogged = false;
  localStorage.accounts = JSON.stringify(accounts);
  window.location.href = `/main.html`;
}
// >>>>>>> 644dd9f090b62ecd3b18b44a0c7e6f108b527af5
