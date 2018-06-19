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
    this.loadData();
    this.sampleForm = new FormGroup({
      'tradingSymbol': new FormControl(),
      'name': new FormControl(),
      'description': new FormControl(),
      'value': new FormControl(),
      'owner': new FormControl()
    });
  }

  loadData(){
    this.hyperLedgerService.getAssets().subscribe(
      (response) => {
        this.assets = response.json()
      },(error) => console.log(error)
    );
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      tradingSymbol: '',
      value: '',
      name: '',
      description: '',
      owner: ''
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
      owner: asset.owner
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
    owner = "resource:org.example.mynetwork.Trader#"+owner;
    if(this.isSaveMode){
      let asset= new Asset(tradingSymbol, name, description, value, owner)
      this.hyperLedgerService.addAsset(asset).subscribe(
        (response) => {
          console.log(response)
          this.loadData()
        },
        (error) => console.log(error)
      );
    }else{
      let asset= new Asset(null, name, description, value, owner)
      this.hyperLedgerService.updateAsset(tradingSymbol, asset).subscribe(
        (response) => {
          console.log(response)
          this.loadData()
        },
        (error) => console.log(error)
      );
    }
  }

  removeAsset(event, asset:Asset){
    this.hyperLedgerService.removeAsset(asset).subscribe(
      (response) => {
        console.log(response)
        this.loadData()
      },
      (error) => console.log(error)
    );
  }
}
