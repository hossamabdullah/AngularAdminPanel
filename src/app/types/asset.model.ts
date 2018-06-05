export class Asset{
    tradingSymbol: Text;
    name: Text;
    description: Text;
    value: Number;

    constructor(tradingSymbol, name, description, value){
        this.tradingSymbol = tradingSymbol;
        if(value < 100000000)
            this.value = value;
        this.name = name;
        this.description = description;
    }
}