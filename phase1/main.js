import AccountsRepo from "./repo/accountRepo.js";



const acctRepo = new AccountsRepo()
const accounts = [
    {
        name: "Shouq",
        companyName: "Sefora",
        username: "shouq123",
        password: "pass123",
        acctType: "seller",
        balance: 10000
    },
    {
        name: "Nada",
        companyName: "Fenty Beauty",
        username: "nada123",
        password: "pass123",
        acctType: "seller",
        balance: 15000
    },
    {
        name: "Khadeja",
        username: "Khadeja123",
        password: "pass123",
        acctType: "client",
        balance: 5000
    },
    {
        name: "Fatima",
        username: "Fatima123",
        password: "pass123",
        acctType: "client",
        balance: 20000
    }
];
accounts.forEach(account => acctRepo.addAccount(account))



