export class Asset{
    tradingSymbol: Text;
    name: Text;
    description: Text;
    value: Number;
    owner: Text;

    constructor(tradingSymbol, name, description, value, owner){
        this.tradingSymbol = tradingSymbol;
        if(value < 100000000)
            this.value = value;
        this.name = name;
        this.description = description;
        this.owner = owner;
    }
}