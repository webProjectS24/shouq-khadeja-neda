const itemsContainer = document.querySelector("#items-container")
const itemCard = document.querySelector("#item-card")
const usersJson = '../data/user.json'
let accounts = []
let items =[]
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
    items = findAccountItems(accounts)
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
    <div class="item-card" id="item-card">
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
// function showDetails(itemNo){
//     let item = items.find(item => itemNo == item.itemNo)
//     itemCard.innerHTML = `
//     <div class="itemDetails">
//     <div class="details">
//         <img src="/images/image copy.png" alt="Item 1">
//         <div class="content">
//         <h2 class="title">Item 1</h2>
//         <p class="description">Description of Item 1</p>
//         <p class="price">$10.99</p>
//         <p class="quantity">Available: 5</p>
//         <h3>Sale History</h3>
//         <h4>Total number of items sold: 3</h4>
//         <ul class="saleHistory">
//             <li>Buyer: user1, Price: 18.99 QR</li>
//             <li>Buyer: user2, Price: 19.99 QR</li>
//             <li>Buyer: user3, Price: 17.99 QR</li>
//         </ul>
//     </div>
//     </div>
// </div>
//     `
// }
