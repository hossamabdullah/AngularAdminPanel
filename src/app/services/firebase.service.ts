import {Injectable} from '@angular/core';
import { User } from '../types/user.model';
import { Asset } from '../types/asset.model';
import { Http } from '@angular/http';
import { AssetTransfer } from '../types/assetTransfer.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService{
    private basePath = '/shares';
    public items: any;
    public item: any;

    constructor(private db: AngularFireDatabase, private http:Http) { }

    add_user(user: User) {
        return this.http.put('https://stock-network.firebaseio.com/Trader/'+user.traderId+'.json', user);
    }

    get_users(){
        return this.http.get('https://stock-network.firebaseio.com/Trader.json');
    }
}