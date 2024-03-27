const itemDetails = document.querySelector("#itemDetails")
const usersJson = '../data/user.json'
let items = []
let accounts = []
let account
document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const itemNo = urlParams.get('itemNo');
    loadPage()
});
async function loadPage(){
    if(!localStorage.accounts){
    const data = await fetch(usersJson)
    const accounts = await data.json()
    localStorage.accounts = JSON.stringify(accounts)
    }
    else{
        accounts = JSON.parse(localStorage.accounts)
    }
        items = findAccountItems(accounts)
        displayItems(items)
}
function findAccountItems(accounts){
    let account = accounts.find(account => account.isLogged == true)
    return account.items
}
function displayItems(items){
    let htmlForItems = items.map(item => itemToHTML(item)).join(' ')
    itemDetails.innerHTML = htmlForItems
}
function itemToHTML(item){
    return `
    <div class="details">
                    <img src="${item.imageUrl}" alt="Item 1">
                    <div class="content">
                    <h2 class="title">${item.name}</h2>
                    <p class="description">${item.description}</p>
                    <p class="quantity">Available: ${item.quantity}</p>
                    <p class="status">${item.status}</p>
                    <h3>Sale History</h3>
                    <h4>Total number of items sold: ${item.sold}</h4>
                    <ul class="saleHistory">
                        <li>Buyer: user1, Price: ${item.price} QR</li>
                        <li>Buyer: user2, Price: ${item.price}QR</li>
                        <li>Buyer: user3, Price: ${item.price} QR</li>
                    </ul>
                    </div>
    `
}