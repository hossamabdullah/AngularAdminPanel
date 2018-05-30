export class Asset{
    id: Text;
    value: Number;
    type: Text;
    //TODO dict of extra parameters to be added

    constructor(id, value, type){
        this.id = id;
        //TODO move to setter
        if(value < 100000000)
            this.value = value;
        this.type = type;
    }
}