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
  assetsMap: Map<string, Asset[]>
  sampleForm;
  isSaveMode=true;
  isEditMode=false;
  types: string[];

  constructor(private hyperLedgerService: HyperledgerService) {}

  ngOnInit() {
    this.loadData();
    this.sampleForm = new FormGroup({
      'tradingSymbol': new FormControl(),
      'name': new FormControl(),
      'description': new FormControl(),
      'value': new FormControl(),
      'owner': new FormControl(),
      'type': new FormControl()
    });
  }

  loadData(){
    this.assetsMap = this.hyperLedgerService.getAssetsByType()
    this.types = Array.from(this.assetsMap.keys())
    console.log(this.types)
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      tradingSymbol: '',
      value: '',
      name: '',
      description: '',
      owner: '',
      type: ''
    });
    this.isSaveMode=true;
    this.isEditMode=false;
  }

  enableEditAsset(event, asset:Asset){
    this.sampleForm.setValue({
      tradingSymbol: asset.tradingSymbol,
      value: asset.value,
      name: asset.name,
      description: asset.description,
      owner: asset.owner,
      type: asset.type
    });    
    this.isSaveMode=false;
    this.isEditMode=true;
  }


  save(){
    let tradingSymbol = this.sampleForm.controls.tradingSymbol.value;
    let description = this.sampleForm.controls.description.value;
    let name = this.sampleForm.controls.name.value;
    let value = this.sampleForm.controls.value.value;
    let owner = this.sampleForm.controls.owner.value;
    let type = this.sampleForm.controls.type.value;
    if(this.isSaveMode){
      owner = "resource:org.example.mynetwork.Trader#"+owner;
      let asset= new Asset(tradingSymbol, name, description, value, owner, type)
      this.hyperLedgerService.addAsset(asset).subscribe(
        (response) => {
          this.loadData()
        },
        (error) => console.log(error)
      );
    }else{
      owner = "resource:org.example.mynetwork.Trader#"+owner.substring(1);
      let asset= new Asset(null, name, description, value, owner, type)
      this.hyperLedgerService.updateAsset(tradingSymbol, asset).subscribe(
        (response) => {
          this.loadData()
        },
        (error) => console.log(error)
      );
    }
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
