export class Asset{
    type: String;
    asset: Asset[];

    constructor(type, asset){
        this.type = type;
        this.asset = asset;
    }
}