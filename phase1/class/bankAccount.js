class BankAccount {
    constructor(balance) {
        this.balance = balance; 
    }

    deposit(amount) {
        if(amount<0)
        return false;
        else{
        this.balance+=amount;
        return true;
        }
    }
    withdraw(amount) {
        if(amount<0 || this.balance<amount)
        return false;
        account.balance-= amount;
        return true;
    }
}

export default {BankAccount} 
