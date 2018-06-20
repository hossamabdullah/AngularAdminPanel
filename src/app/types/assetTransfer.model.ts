export class AssetTransfer{
    commodity: Text;
    newOwner: Text;
    transactionId: Text;
    timestamp: Text;

    constructor(assetId, ownerId, transactionId, timestamp){
        this.commodity = assetId;
        this.newOwner = ownerId;
        this.transactionId = transactionId;
        this.timestamp = timestamp;
    }
}