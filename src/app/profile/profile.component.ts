import { Component, OnInit } from '@angular/core';
import { Asset } from '../types/asset.model';
import { HyperledgerService } from '../services/Hyperledger.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  assetsMap = new Map<string, Asset[]>();
  sampleForm;
  types: string[];
  selectedType: string;
  selectedAssets: Asset[];

  constructor(private hyperLedgerService: HyperledgerService, private authService: AuthService) {}

  ngOnInit() {
    this.loadData();
    this.sampleForm = new FormGroup({
      'type': new FormControl(),
      'count': new FormControl(),
      'ownerId': new FormControl()
    });
  }

  loadData() {
    this.assetsMap.clear();
    this.hyperLedgerService.getAssetsByType().subscribe(
      response => {
        let assets = response.json();
        assets.forEach((asset, index, object) => {
          asset.owner = asset.owner.substring(37);
          if (this.assetsMap.has(asset.type)) {
            let assets = this.assetsMap.get(asset.type);
            assets.push(asset);
            this.assetsMap.set(asset.type, assets);
          } else {
            this.assetsMap.set(asset.type, [asset]);
          }
        });
        this.types = Array.from(this.assetsMap.keys());
        this.selectedAssets = this.assetsMap.get(this.types[0]);
        console.log(this.assetsMap);
        console.log(this.types);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateSelectedType(type) {
    this.selectedAssets = this.assetsMap.get(type);
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      type:'',
      count:'',
      ownerId:''
    });
  }


  save(){
    let type = this.sampleForm.controls.type.value;
    let count = this.sampleForm.controls.count.value;
    let ownerId = this.sampleForm.controls.ownerId.value;
    ownerId = "resource:org.example.mynetwork.Trader#" + ownerId;
    let percentage = this.hyperLedgerService.callPercentage(count, type);
    
  }

  removeAsset(event, asset:Asset){
    this.hyperLedgerService.removeAsset(asset).subscribe(
      (response) => {
        this.loadData()
      },
      (error) => console.log(error)
    );
  }
}
