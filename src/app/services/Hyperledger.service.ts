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

    // authenticateUser(){
    //     const file = new File([cardData], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});
    //     const formData = new FormData();
    //     formData.append('card', file);
    //     const headers = new HttpHeaders();
    //     headers.set('Content-Type', 'multipart/form-data');
    //     return this.httpClient.post('http://localhost:3000/api/wallet/import', formData, {withCredentials: true, headers}).toPromise();
    // }

    getUsers(){
        return this.http.get('http://localhost:3000/api/org.example.mynetwork.Trader');
    }

    updateUser(user: User){
        console.log("updating user: "+user);
        return this.http.put('http://localhost:3000/api/org.example.mynetwork.Trader/'+user.traderId, user);
    }

    addUser(user: User){
        return this.http.post('http://localhost:3000/api/org.example.mynetwork.Trader', user);
    }

    removeUser(user: User){
        console.log("removing user: "+user);
        return this.http.delete('http://localhost:3000/api/org.example.mynetwork.Trader/'+user.traderId);
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