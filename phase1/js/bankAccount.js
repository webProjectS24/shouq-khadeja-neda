class BankAccount {
    static count = 1;
    constructor(balance) {
        this.accountNo = BankAccount.count;
        this.balance = balance; 
        BankAccount.count++
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.error('Insufficient funds');
        }
    }
}
