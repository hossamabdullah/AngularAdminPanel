export class AssetTransfer{
    commodity: String;
    newOwner: String;
    transactionId: String;
    timestamp: String;

    constructor(assetId, ownerId, transactionId, timestamp){
        this.commodity = assetId;
        this.newOwner = ownerId;
        this.transactionId = transactionId;
        this.timestamp = timestamp;
    }
}