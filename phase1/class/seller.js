class Seller{
    constructor(companyName,username, password,bankAccount){
        this.accountNo = Math.floor(Math.random() * (1000))
        this.companyName = companyName
        this.username = username;
        this.password = password;
        this.bankAccount = bankAccount;
        this.isLogged = false
    }
}