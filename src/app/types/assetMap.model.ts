import { Asset } from "./asset.model";

export class AssetMap{
    type: String;
    assets: Asset[];

    constructor(type, assets){
        this.type = type;
        this.assets = assets;
    }
}