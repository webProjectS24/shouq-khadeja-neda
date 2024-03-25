class Item{
    constructor(name, description, price, quantity, image){
        this.itemid = Math.floor(Math.random() * (1000));
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
