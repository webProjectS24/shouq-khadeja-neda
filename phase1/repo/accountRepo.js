// npm i fs-extra
import fs from 'fs-extra'
import path from 'path'

class AccountsRepo {
    constructor() {
        this.path = path.join(process.cwd(), '/data/user.json')
        console.log(this.path);
        this.accounts = []
    }
    async getAccounts() {
        const foundaccounts = await fs.readJSON(this.path)
        return foundaccounts;
    }
    async addAccount(account) {
        account.accountNo = Math.floor(Math.random() * (1000))
        try {
            this.accounts = await this.getAccounts();
        } catch (error) {
            this.accounts = []; 
        }
        this.accounts.push(account)
        await fs.writeJSON(this.path, this.accounts)
        console.log("added!");
    }
    async updateAccount(account, accountNo) {
        this.accounts = await fs.readJson(this.path)
        const index = this.accounts.findIndex(acc => acc.accountNo == accountNo)
        if (index >= 0) {
            this.accounts[index] = account
            await fs.writeJson(this.path, this.accounts)
            return "updated successfully"
        }
        return "Unable to update account because it does not exist"
    }
    async getAccount(accNo) {
        this.accounts = await fs.readJson(this.path)
        const account = this.accounts.find(acc => acc.accountNo == accNo)
        return account
    }
    async deposit(accountNo,amount) {
        const account = await this.getAccount(accountNo)
        if(amount<0)
        return false;
        else{
        account.balance+=amount;
        updateAccount(account, accountNo)
        }
    }
    async withdraw(accountNo,amount) {
        const account = await this.getAccount(accountNo)
        if(amount<0 || account.balance<amount)
        return false;
        account.balance-= amount;
        await this.updateAccount(account, accountNo)
    }
}
export default AccountsRepo