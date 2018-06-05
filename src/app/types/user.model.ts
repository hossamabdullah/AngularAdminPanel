export class User{
    traderId: Text;
    firstName: Text;
    lastName: Text;
    
    constructor(traderId, firstName, lastName){
        this.traderId = traderId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}