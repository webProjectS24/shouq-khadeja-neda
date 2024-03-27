
const productsContainter = document.querySelector("#products-container")
const itemJson = '../data/item.json'
let products =[]
document.addEventListener('DOMContentLoaded', function () {
    loadProducts()
})
async function loadProducts(){
    if(!localStorage.items){
        const data = await fetch(itemJson)
        const products = await data.json()
        localStorage.items = JSON.stringify(products)
        }
    else{
        products = JSON.parse(localStorage.items)
    }
    displayProducts(products)
}
function displayProducts(products){
    let htmlForProducts = products.map(product => productToHTML(product)).join(' ')
    productsContainter.innerHTML = htmlForProducts
}
function productToHTML(product){
    return `
                <div class="card" id="">
                    <div class="product-info">
                        <img src="${product.imageUrl}" alt="" />
                        <h2 class="product-title">${product.name}</h2>
                        <p class="product-price">${product.price}</p>
                        <p class="product-description">${product.description}</p>
                    </div>
                    // <div class="md-2">
                    //     <button type="button" class="btn btn-danger btn-lg" onclick="deleteProduct(${product.id})">Delete</button>
                       
                    //         <button type="button" class="btn btn-success btn-lg" onclick="toggleFavorite(${product.itemNo})">Remove to Favorites</button>
                    //         <button type="button" class="btn btn-primary btn-lg" onclick="toggleFavorite(${product.itemNo})">Add to Favorites</button> 
                    // </div >
                </div >
    `
}
search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
}

// navlist
let navlist = document.querySelector('.navlist');

document.querySelector('#menu-icon').onclick =() =>{
    navlist.classList.toggle('active');
}


// using fetch()
function searchItems(){
    let searchInput = document.getElementById('search-input').ariaValueMax.toLowerCase();
    fetch('item.json')
    .then(response=> response.json())
    .then(data=>{
    })

}
