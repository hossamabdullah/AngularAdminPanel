export class User{
    name: Text;
    address: Text;
    phone: Text;
    email: Text;
    birthday: Text;
    gender: Text;
    balance: Number;
    key: Text;

    constructor(name, address, phone, email, birthday, gender, balance, key){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.gender = gender;
        this.balance = balance;
        this.key = key;
    }
}