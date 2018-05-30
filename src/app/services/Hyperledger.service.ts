import {Injectable} from '@angular/core';
import { User } from '../types/user.model';
import { Asset } from '../types/asset.model';

@Injectable()
export class HyperledgerService{
    //TODO check if declaring of array is correct this way
    users: Array<User>;
    assets: Array<Asset>;

    getUsers(): Array<User>{
        return null;
        //TODO call webservice to get users
        //TODO store values in users list
    }

    updateUser(user: User){
        //TODO update user
    }

    addUser(user: User){
        //TODO add user
    }

    deleteUser(user: User){
        //TODO delete user
    }

    ////////////////////////////////////////////////
    ///////////   Asset  Functions   ///////////////
    ////////////////////////////////////////////////
    getAssets(){
        //TODO call webservice to get assets
        //TODO store values in users list
    }

    updateAsset(asset: Asset){
        //TODO update asset
    }


    addAsset(asset: Asset){
        //TODO update asset
    }

    deleteAsset(asset: Asset){
        //TODO delete asset
    }
}