import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class users_itemsRepo {
    async getAccounts(){
        try {
            return await prisma.account.findMany()
        } catch (error) {
            return {error: error.message}
        }
    }
    async getAccountsByType(acctType){
        try {
            return await prisma.account.findMany({
                where: {acctType}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getItems(){
        try {
            return await prisma.item.findMany()
        } catch (error) {
            return {error: error.message}
        }
    }
    async getItemsOfSeller(accountNo){
        try {
            return await prisma.item.findMany({
                where: {sellerId: accountNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getCustomerById(custId){
        try {
            return await prisma.customer.findFirst({
                where: {accoutNo: custId}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getBuyers(itemNo){
        try {
            const buyerInfo = await prisma.transaction.findMany({
                where: { itemNo },
                select: {
                    Date: true,
                    totalPrice: true,
                    customer: {
                        select: {
                            account: {
                                select: {
                                    username: true
                                }
                            }
                        }
                    }
                }
            });
            return buyerInfo;
        } catch (error) {
            return {error: error.message}
        }
    }
    async getTransactionsOfItem(itemNo){
        try {
            return await prisma.transaction.findMany({
                where: {itemNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getTransactionsOfCustomer(accountNo){
        try {
            return await prisma.transaction.findMany({
                where: {custId: accountNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getAccount(accountNo){
        try {
            return await prisma.account.findFirst({
                where: {accountNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getSeller(accountNo){
        try {
            const account = await this.getAccount(accountNo)
            const selleraccount = await prisma.seller.findFirst({
                where: {accountNo}
            })
            return {...account, ...selleraccount}
        } catch (error) {
            return {error: error.message}
        }
    }
    async getCustomer(accountNo){
        try {
            const account = await this.getAccount(accountNo)
            const customerAccount = await prisma.customer.findFirst({
                where: {accountNo}
            })
            return {...account, ...customerAccount}
        } catch (error) {
            return {error: error.message}
        }
    }
    async getItem(itemNo){
        try {
            return prisma.item.findFirst({
                where: {itemNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async getItemsByName(name){
        try {
            return await prisma.item.findMany({
                where: {name: {contains:  name}}
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async addItem(accountNo,item){
        try {
            item.sellerId = parseInt(accountNo)
            item.sold = 0
            item.price = parseFloat(item.price)
            item.quantity = parseInt(item.quantity)
            item.status = 'On Sale'
            return await prisma.item.create({
                data: item
            })
        } catch (error) {
            return {error: error.message}
        }
    }

    async addTransaction(transaction,accountNo){
        try {
            transaction.accountNo = accountNo
            return await prisma.transaction.create({
                data: transaction
            })
        } catch (error) {
            return {error: error.message}
        }
    }
    async updateAccount(accountNo, account){
        try {
            return await prisma.account.update({
                data: account,
                where: {accountNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }

    async updateItem(itemNo, item){
        try {
            return await prisma.item.update({
                data: item,
                where: {itemNo}
            })
        } catch (error) {
            return {error: error.message}
        }
    }

    async withdraw(accountNo, amount){
        try {
            const account =  await this.getAccount(accountNo)
            if(amount<=account.balance){
                account.balance -= amount
                const updatedAccount = account
                return await this.updateAccount(accountNo,updatedAccount)
            }
            else{
                return "Insuffiecient amount of money"
            }

        } catch (error) {
            return {error: error.message}
        }
    }
    async deposit(accountNo, amount){
        try {
            const account =  await this.getAccount(accountNo)
            if(amount >=0){
                account.balance += amount
                const updatedAccount = account
                return await this.updateAccount(accountNo,updatedAccount)
            }
            else{
                return "Insuffiecient amount of money"
            }

        } catch (error) {
            return {error: error.message}
        }
    }
    async gettotalOfUploadedItems(accountNo) {
        try {
          return await prisma.item.count({
            where: { sellerId: accountNo }
          })
        } catch (error) {
          return { error: error.message }
        }
      }

      async getmostBoughtItem(accountNo) {
        try {
          return await prisma.item.findFirst({
            where: { sellerId: accountNo },
            orderBy: { sold: 'desc' }
          })
        } catch (error) {
          return { error: error.message }
        }
      }
      async getAveragePriceOfItems(accountNo) {
        try {
          return await prisma.item.aggregate({
            where: { sellerId: accountNo },
            avg: { price: true }
          })
        } catch (error) {
          return { error: error.message }
        }
      }

}
export default new users_itemsRepo();
