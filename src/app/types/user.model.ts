export class User{
    traderId: Text;
    firstName: Text;
    lastName: Text;
    balance: Number;
    password: Text;
    
    constructor(traderId, firstName, lastName, balance){
        this.traderId = traderId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
}