class Item{
    static count = 11;
    constructor(name, description, price, imageURL, quantity){
        this.itemid = Item.count;
        count++;
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
