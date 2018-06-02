import {Injectable} from '@angular/core';
import { User } from '../types/user.model';
import { Asset } from '../types/asset.model';

@Injectable({
    providedIn: 'root'
})
export class HyperledgerService{
    //TODO check if declaring of array is correct this way
    users: User[];
    assets: Asset[];

    getUsers(): User[]{
        //TODO call webservice to get users
        let user = new User("name", "address", "phone", "email", "birthday", "gender", 123, 'key');
        this.users = [user];
        return this.users;
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