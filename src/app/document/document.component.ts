import { Component, OnInit } from '@angular/core';
import { Asset } from '../types/asset.model';
import { HyperledgerService } from '../services/Hyperledger.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  assets: Asset[];

  constructor(private hyperLedgerService: HyperledgerService) { 
  }


  ngOnInit() {
    this.assets = this.hyperLedgerService.getAssets();
  }

  editAsset(event, asset:Asset){
    this.hyperLedgerService.updateAsset(asset);
  }

  removeAsset(event, asset:Asset){
    this.hyperLedgerService.removeAsset(asset);
  }
}
