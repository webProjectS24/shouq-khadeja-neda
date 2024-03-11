class Seller{
    constructor(username, password,bankAccount){
        this.username = username;
        this.password = password;
        this.bankAccount = bankAccount;
        this.items = [];
    }

    uploadItem(item){
        this.items.push(item);
    }

    deleteItem(itemId){
        index = this.items.findIndex(item => itemId === item.itemId)
        if(index !== -1){
        this.items.splice(index,1);
        }
        else{
            console.console.log();('Item is not found');
        }
    }

    updateItem(itemId, updatedItem){
        index = this.items.findIndex(item => itemId === item.itemId)
        if(index !== -1){
            this.items[index] = updatedItem;
            }
        else{
                console.console.log();('Item is not found');
        }
    }

    history(){
        return this.items;
    }
}