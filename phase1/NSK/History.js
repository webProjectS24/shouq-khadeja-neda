//items in the history container to add the items to that div
const container = document.querySelector(".history-container");
//items link of the json file to display the items of a specified customer
const items = "../data/item.json";
items = [];
let accountNo;
document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  accountNo = urlParams.get("accountNo");
  loadItems();
});

