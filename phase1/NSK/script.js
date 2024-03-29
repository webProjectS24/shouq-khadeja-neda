// <<<<<<< HEAD
import ItemRepo from "./repo/itemRepo.js";


// search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
// =======
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
// >>>>>>> e3d0177fa0bcd4518ac4c315f57653ce2f1e1d26
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

// <<<<<<< HEAD
// =======
// using fetch()
function searchItems() {
  let searchInput = document
    .getElementById("search-input")
    .ariaValueMax.toLowerCase();
  fetch("item.json")
    .then((response) => response.json())
    .then((data) => {});
}

function buyProduct(itemNo,sellerId){
  let index = accounts.findIndex(account => account.isLogged == true)
    if(index ==-1){
        alert("please log in first")
        window.location.href = `../html/login.html`
    }
    else{
      window.location.href = `./buyProduct.html?accountNo=${accounts[index].accountNo}&itemNo=${itemNo}&sellerId=${sellerId}`;
    }

// >>>>>>> e3d0177fa0bcd4518ac4c315f57653ce2f1e1d26

//item 
(async () => {
    const itemRepo = new ItemRepo();
    const item = await itemRepo.getItems();
    const itemsContainer = document.getElementById();

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        
    });
})

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
}}


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

const itemIndex = items.findIndex(item => item.itemNo === itemNo);
const customer = accounts.find(account => account.accountNo === accountNo);
const sellerIndex = accounts.findIndex( account => account.accountNo=== sellerId);

//chech is found
if(itemIndex !== -1 && customer && sellerIndex !== -1){
    if(items[itemIndex].price > customer.balance)
    alert("Your balance is not enough!");
return;
} else if(quantity > items[itemIndex].quantity){
    alert("Quantity is greater than the number of available items ");
    return;
}

try{
    items[itemIndex].sold += quantity;
    items[itemIndex].quantity -= quantity;

    if(items[itemIndex].quantity === 0 ){
        item[itemIndex].status = "sold";
    }
    customer.items.push(items[index]);

    if(accounts[sellerIndex].hasOwnProperty('soldItem')){
        accounts[sellerIndex].soldItem.push(items[itemIndex])
    } else{
        accounts[sellerIndex].soldItem = [items[itemIndex]];
    }

    console.log("Successful puurchase");
} catch(error){
    console.error("Error" , error);
    alert("Please try again later");

}

