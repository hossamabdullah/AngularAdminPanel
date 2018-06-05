import {Injectable} from '@angular/core';
import { User } from '../types/user.model';
import { Asset } from '../types/asset.model';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class HyperledgerService{
    http: Http;
    users: User[];
    assets: Asset[];

    getUsers(): User[]{
        //TODO call webservice to get users
        let user1 = new User("111", "address", "phone");
        let user3 = new User("222", "address", "phone");
        let user2 = new User("333", "address", "phone");
        let user4 = new User("444", "address", "phone");
        let user5 = new User("555", "address", "phone");
        this.users = [user1, user2, user3, user4, user5];
        return this.users;
    }

    updateUser(user: User){
        //TODO update user
        console.log("updating user: "+user);
        // var index = this.users.indexOf(user, 0);
        // this.users[index] = user
    }

    addUser(user: User){
        //TODO add user
    }

    removeUser(user: User){
        //TODO delete user
        console.log("removing user: "+user);
        // var index = this.users.indexOf(user, 0);
        // if (index > -1) {
        //     this.users.splice(index, 1);
        // }
    }

    ////////////////////////////////////////////////
    ///////////   Asset  Functions   ///////////////
    ////////////////////////////////////////////////
    getAssets(): Asset[]{
        //TODO call webservice to get assets
        let asset1 = new Asset(11, 123, "bb");
        let asset2 = new Asset(22, 123, "bb");
        let asset3 = new Asset(33, 123, "bb");
        let asset4 = new Asset(44, 123, "bb");
        let asset5 = new Asset(55, 123, "bb");
        this.assets = [asset1, asset2, asset3, asset4, asset5];
        return this.assets;
    }

    updateAsset(asset: Asset){
        //TODO update asset
    }


    addAsset(asset: Asset){
        //TODO update asset
    }

    removeAsset(asset: Asset){
        //TODO delete asset
    }
}