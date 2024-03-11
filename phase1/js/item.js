class Item{
    constructor(name, description, price, imageURL, quantity){
        this.itemid = itemid;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
        this.quantity = quantity;
    }
    updateItem(item){
        this.quantity = item.quantity;
    }


}
export default Item;
