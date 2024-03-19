import Item from "./item.js";
//name, description, price, quantity, imag
let items = [
    Item("Lippie Pencil","Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",20,2,url("https://target.scene7.com/is/image/Target/GUEST_486563dc-0563-411c-9788-1356cd11a915?wid=1200&hei=1200&qlt=80&fmt=webp"))
]

console.log(JSON.stringify(items));

