import {Injectable} from '@angular/core';
import { User } from '../types/user.model';
import { Asset } from '../types/asset.model';
import { Http } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class HyperledgerService{
    users: User[];
    assets: Asset[];
    a = 2;
    constructor(private http: Http){}

    getUsers(){
        return this.http.get('http://localhost:3000/api/org.example.mynetwork.Trader');
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
        let asset1 = new Asset("id1", "aa", "aa", 111);
        let asset2 = new Asset("id2", "aa", "aa", 222);
        let asset3 = new Asset("id3", "aa", "aa", 333);
        let asset4 = new Asset("id4", "aa", "aa", 444);
        let asset5 = new Asset("id5", "aa", "aa", 555);
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