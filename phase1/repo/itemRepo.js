// npm i fs-extra
// @ts-ignore

class ItemRepo {
    constructor() {
        this.path = path.join(process.cwd(), '/data/item.json')
        console.log(this.path);
        this.items = []
    }
    async getItems() {
        const items = await fs.readJSON(this.path)
        return items;
    }
    async addItem(item) {
        item.itemNo = Math.floor(Math.random() * (1000))
        try {
            this.items = await this.getItems();
        } catch (error) {
            this.items = []; 
        }
        this.items.push(item)
        await fs.writeJSON(this.path, this.items)
        console.log("added!");
    }
    async updateItem(item, itemNo) {
        this.items = await fs.readJson(this.path)
        const index = this.items.findIndex(item => item.itemNo == itemNo)
        if (index >= 0) {
            this.items[index] = item
            await fs.writeJson(this.path, this.items)
            return "updated successfully"
        }
        return "Unable to update item because it does not exist"
    }
    async getItem(itemNo) {
        this.items = await fs.readJson(this.path)
        const item = this.items.find(item => item.itemNo == itemNo)
        return item
    }
}
export default ItemRepo