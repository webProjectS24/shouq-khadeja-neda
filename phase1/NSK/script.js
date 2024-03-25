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


// using fetch()
function searchItems(){
    let searchInput = document.getElementById('search-input').ariaValueMax.toLowerCase();
    fetch('item.json')
    .then(response=> response.json())
    .then(data=>{
    })

}
