const itemsContainer = document.querySelector("#items-container")
const usersJson = '../data/user.json'
let accounts = []
document.addEventListener('DOMContentLoaded', function () {
    loadItems()
})
async function loadItems(){
    if(!localStorage.accounts){
        const data = await fetch(usersJson)
        const accounts = await data.json()
        localStorage.accounts = JSON.stringify(accounts)
        }
        else{
          accounts = JSON.parse(localStorage.accounts)
        }
    let items = findAccountItems(accounts)
    displayItems(items)
}
function findAccountItems(accounts){
    let account = accounts.find(account => account.isLogged == true)
    if(account ==null){
        alert("please log in first")
    }
    return account.items
}
function displayItems(items){
    let htmlForItems = items.map(item => itemToHTML(item)).join(' ')
    itemsContainer.innerHTML = htmlForItems
}
function itemToHTML(item){
    return `
    <div class="items-container" id="items-container">
    <div class="item-card">
        <img class="item-image" src="${item.imageUrl}">
        <div class="item-details">
            <h2 class="item-title">${item.name}</h2>
            <p class="item-description">${item.description}</p>
            <p class="item-quantity">Available: ${item.quantity}</p>
            <p class="item-price">${item.price} QAR</p>
        </div>
        <a class="item-button" href="../seller/itemDetails.html">View Details</a>
    </div>
    `
}
