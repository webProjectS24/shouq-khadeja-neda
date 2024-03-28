import ItemRepo from "./repo/itemRepo.js";


// search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
}

// navlist
let navlist = document.querySelector('.navlist');

document.querySelector('#menu-icon').onclick =() =>{
    navlist.classList.toggle('active');
}



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
// }

//Purchase an item

