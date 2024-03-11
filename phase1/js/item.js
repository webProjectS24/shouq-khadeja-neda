class Item{
    static count = 11;
    constructor(name, description, price, quantity, image){
        this.itemid = Item.count;
        count++;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
    updateItem(item){
        this.quantity = item.quantity;
    }


}
export default Item;
