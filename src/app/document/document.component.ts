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
      'id': new FormControl(),
      'value': new FormControl(),
      'type': new FormControl(),
    });
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      id: '',
      value: '',
      type: ''
    });
    this.isSaveMode=true;
    this.isEditMode=false;
  }

  enableEditAsset(event, asset:Asset){
    this.sampleForm.setValue({
      id: asset.id,
      value: asset.value,
      type: asset.type
    });    
    this.isSaveMode=false;
    this.isEditMode=true;
  }

  save(){
    let id = this.sampleForm.controls.id.value;
    let value = this.sampleForm.controls.value.value;
    let type = this.sampleForm.controls.type.value;
    let asset= new Asset(id, value, type);
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
