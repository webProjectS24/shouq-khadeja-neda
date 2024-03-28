const itemDetails = document.querySelector("#itemDetails")
const usersJson = '../data/user.json'
const itemsJson = '../data/user.json'
let items = []
let accounts = []
let accountNo, itemNo;
document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    itemNo = urlParams.get('itemNo');
    accountNo = urlParams.get('accountNo');
    loadPage()
});
async function loadPage(){
    if(!localStorage.accounts){
        const data = await fetch(usersJson)
        const accounts = await data.json()
        localStorage.accounts = JSON.stringify(accounts)
    }
    if(!localStorage.items){
        const data = await fetch(itemsJson)
        const items = await data.json()
        localStorage.items = JSON.stringify(items)
    }
    else{
        accounts = JSON.parse(localStorage.accounts)
        items = JSON.parse(localStorage.items)
    }
        let item = items.find(item=>item.itemNo ==itemNo)
        itemDetails.innerHTML = itemToHTML(item)
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
                    ${BuyersList(item.Buyers,item.price)}
                    </ul>
                    </div>
    `
}
function BuyersList(buyers,price){
    return buyers.map(buyer => `<li>Buyer: ${buyer.username}, Price: ${price} QR</li>`)
}