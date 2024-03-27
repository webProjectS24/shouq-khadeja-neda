const form = document.querySelector("#form")
const usersJson = '../data/user.json'
let items = []
let accountNo
form.addEventListener('submit',addItem)
document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    accountNo = urlParams.get('accountNo')
});


async function addItem(e){
    accounts = JSON.parse(localStorage.accounts)
    e.preventDefault()
    const item = formToObject(e.target) //e.target is the form itself
    if(item.price<=0){
        alert("Enter positive value for price")
        return;
    }
    if(item.quantity<=0){
        alert("Enter positive value for quantity")
        return;
    }
    item.itemNo = Date.now()
    item.sellerId = accountNo
    item.status = "On Sale"
    item.sold = 0
    addItemToaccount(item)
}
function formToObject(form){
    const formData = new FormData(form)
    const data = {}
    for (const[key,value] of formData){
        data[key] = value
    }
    return data
}
function addItemToaccount(item){
    items = JSON.parse(localStorage.items)
    items.unshift(item)
    localStorage.items = JSON.stringify(items)
    window.location.href = `./sellerHistory.html?accountNo=${accountNo}`;
}
