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
  displayProducts(filteredProducts);
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
  window.location.href = `../html/seller/uploadItem.html?accountNo=${accountNo}`;
}
function ToHistory() {
  window.location.href = `./History.html?accountNo=${accountNo}`;
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
  window.location.href = `../html/seller/sellerHistory.html?accountNo=${accountNo}`;
}
function buyProduct(itemNo, sellerId) {
  let index = accounts.findIndex((account) => account.isLogged == true);
  if (index == -1) {
    alert("please log in first");
    window.location.href = `./login.html`;
  } else {
    window.location.href = `./buyProduct.html?accountNo=${accounts[index].accountNo}&itemNo=${itemNo}&sellerId=${sellerId}`;
  }
}

//  HEAD
// items.forEach((item) => {
//   const itemElement = document.createElement("div");
//   itemElement.classList.add("item");
// });

//reading from flie

// const fs = require('fs');
// async function readItemsFromFile(){
//     try{
//         const data = await fs.promises.readFole('./repo/itemRepo.js')
//     }
// }

//search in json file
// const searchInput = document.getElementById('#search-input');
// // const searchButton = document.getElementById();
// const searchResultList = document.getElementById('');
// function searchItems(){
//     let searchInput = document.getElementById('search-input').ariaValueMax.toLowerCase();
//     fetch('item.json')
//     .then(response=> response.json())
//     .then(data=>{
//     })

// }

//test code
// let http = new XMLHttpRequest();
// http.open('get','./repo/itemRepo.js',true);
// http.send();
// http.onload = function(){
//     if(this.readyState == 4 && this.status == 200){
//         let products = JSON.parse(this.responseText);
//         let output ="";

//         for(let item of products){
//             output += ' <div class="products"> <img src="" alt=""> <p class="title"></p> <p class=""></p> </div>';
//         }

//     }

// item
// let accounts=[];
// try{
//     const storedAcc = localStorage.getItem('accounts');
//     if(storedAcc){
//         accounts=JSON.parse(storedAcc);
//     }
// } catch(error){
//     console.error('error from localStorage',error);
// }
// const buyButton = document.getElementById('');

// cart
// document.addEventListener('DOMContentLoaded', ()=>{
//     const cartItemList = document.querySelector('.cartItems');
//     const cartTotal = document.querySelector('.cartTotal');
//     const cartIcon = document.querySelector('#cart-icon');
//     const cartSide = document.getElementById('.cartSide');

//     let cartItems =[];
//     let totalAmount = 0;

// })

// chechout

// const itemIndex = items.findIndex((item) => item.itemNo === itemNo);
// const customer = accounts.find((account) => account.accountNo === accountNo);
// const sellerIndex = accounts.findIndex(
//   (account) => account.accountNo === sellerId
// );

// //chech is found
// if (itemIndex !== -1 && customer && sellerIndex !== -1) {
//   if (items[itemIndex].price > customer.balance) {
//     alert("Your balance is not enough!");
//     return;
//   }
// } else if (quantity > items[itemIndex].quantity) {
//   alert("Quantity is greater than the number of available items ");
//   return;
// }

// try {
//   items[itemIndex].sold += quantity;
//   items[itemIndex].quantity -= quantity;

//   if (items[itemIndex].quantity === 0) {
//     item[itemIndex].status = "sold";
//   }
//   customer.items.push(items[index]);

//   if (accounts[sellerIndex].hasOwnProperty("soldItem")) {
//     accounts[sellerIndex].soldItem.push(items[itemIndex]);
//   } else {
//     accounts[sellerIndex].soldItem = [items[itemIndex]];
//   }

//   console.log("Successful puurchase");
// } catch (error) {
//   console.error("Error", error);
//   alert("Please try again later");
// }

// =======
//logout button
logoutbtn.addEventListener("click", logOut);
function logOut() {
  let index = accounts.findIndex((account) => account.accountNo == accountNo);
  accounts[index].isLogged = false;
  localStorage.accounts = JSON.stringify(accounts);
  window.location.href = `./main.html`;
}
// >>>>>>> 644dd9f090b62ecd3b18b44a0c7e6f108b527af5
