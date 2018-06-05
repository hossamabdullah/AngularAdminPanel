import { Component, OnInit } from '@angular/core';
import { Asset } from '../types/asset.model';
import { HyperledgerService } from '../services/Hyperledger.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  assets: Asset[];
  sampleForm;
  isSaveMode=true;
  isEditMode=false;

  constructor(private hyperLedgerService: HyperledgerService) {}

  ngOnInit() {
    this.assets = this.hyperLedgerService.getAssets();
    this.sampleForm = new FormGroup({
      'tradingSymbol': new FormControl(),
      'name': new FormControl(),
      'description': new FormControl(),
      'value': new FormControl(),
    });
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      tradingSymbol: '',
      value: '',
      name: '',
      description: ''
    });
    this.isSaveMode=true;
    this.isEditMode=false;
  }

  enableEditAsset(event, asset:Asset){
    this.sampleForm.setValue({
      tradingSymbol: asset.tradingSymbol,
      value: asset.value,
      name: asset.name,
      description: asset.description
    });    
    this.isSaveMode=false;
    this.isEditMode=true;
  }

  save(){
    let tradingSymbol = this.sampleForm.controls.tradingSymbol.value;
    let description = this.sampleForm.controls.description.value;
    let name = this.sampleForm.controls.name.value;
    let value = this.sampleForm.controls.value.value;
    let asset= new Asset(tradingSymbol, name, description, value)
    if(this.isSaveMode){
      this.hyperLedgerService.addAsset(asset);
    }else{
      this.hyperLedgerService.updateAsset(asset);
    }
  }

  removeAsset(event, asset:Asset){
    this.hyperLedgerService.removeAsset(asset);
  }
}
