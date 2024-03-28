const productsContainter = document.querySelector("#products-container");
const itemJson = "../data/item.json";
const userJson = "../data/user.json";
let products = [];
let accounts = [];
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
});
async function loadProducts() {
  if (!localStorage.items) {
    const data = await fetch(itemJson);
    const products = await data.json();
    localStorage.items = JSON.stringify(products);
  } else {
    products = JSON.parse(localStorage.items);
  }
  if (!localStorage.accounts) {
    const data = await fetch(userJson);
    const accounts = await data.json();
    localStorage.accounts = JSON.stringify(accounts);
  } else {
    accounts = JSON.parse(localStorage.accounts);
  }
  displayProducts(products);
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
                        <p class="product-price">${product.price}</p>
                        <p class="product-description">${product.description}</p>
                    </div>
                    <div class="md-2">                       
                            <button class="buy-btn" onclick="buyProduct(${product.itemNo},${product.sellerId})">Buy this item</button> 
                    </div >
                </div >
    `;
}
//search;
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
};

// navlist
let navlist = document.querySelector(".navlist");

document.querySelector("#menu-icon").onclick = () => {
  navlist.classList.toggle("active");
};

// using fetch()
function searchItems() {
  let searchInput = document
    .getElementById("search-input")
    .ariaValueMax.toLowerCase();
  fetch("item.json")
    .then((response) => response.json())
    .then((data) => {});
}

function buyProduct(itemNo, sellerId) {
  let index = accounts.findIndex((account) => account.isLogged == true);
  if (index == -1) {
    alert("please log in first");
    window.location.href = `../html/login.html`;
  } else {
    window.location.href = `./buyProduct.html?accountNo=${accounts[index].accountNo}&itemNo=${itemNo}&sellerId=${sellerId}`;
  }
}
