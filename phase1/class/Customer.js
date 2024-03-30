class Customer{
    constructor(name,surname, username, password,balance){
        this.accountNo = Math.floor(Math.random() * (1000));
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.balance = balance;
        this.isLogged = false;
    }
}
export default Customer