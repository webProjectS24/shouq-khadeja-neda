const form = document.querySelector("#form")
const usersJson = '../data/user.json'
let accounts = []
form.addEventListener('submit',addItem)

async function addItem(e){
    accounts = JSON.parse(localStorage.accounts)
    e.preventDefault()
    const item = formToObject(e.target) //e.target is the form itself
    item.itemNo = Date.now()
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
    let index = accounts.findIndex(account => account.isLogged == true)
    if(index ==-1){
        alert("please log in first")
    }
    else{
    accounts[index].items.unshift(item)
    localStorage.accounts = JSON.stringify(accounts)
    }
}