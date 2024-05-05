class Item{
    constructor(name, description, price, quantity, imageUrl,sellerId){
        this.itemNo = Math.floor(Math.random() * (1000));
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.sold = 0
        this.status = "On Sale"
        this.sellerId = sellerId
    }
    updateItem(item){
        this.quantity = item.quantity;
    }
}
export default Item;
