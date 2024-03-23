// search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
}

// using fetch()
function searchItems(){
    let searchInput = document.getElementById('search-input').ariaValueMax.toLowerCase();
    fetch('item.json')
    .then(response=> response.json())
    .then(data=>{
    })

}
