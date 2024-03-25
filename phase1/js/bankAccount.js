class BankAccount {
    static count = 11;
    constructor(balance) {
        this.accountNo = BankAccount.count;
        this.balance = balance; 
        BankAccount.count++;
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
