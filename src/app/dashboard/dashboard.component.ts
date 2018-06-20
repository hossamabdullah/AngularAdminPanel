import { Component, OnInit } from '@angular/core';
import { AssetTransfer } from '../types/assetTransfer.model';
import { FormGroup, FormControl } from '@angular/forms';
import { HyperledgerService } from '../services/Hyperledger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  transactions: AssetTransfer[];
  sampleForm;
  constructor(private hyperLedgerService: HyperledgerService) {}

  ngOnInit() {
    this.loadData();
    this.sampleForm = new FormGroup({
      'assetId': new FormControl(),
      'ownerId': new FormControl()
    });
  }

  loadData(){
    this.hyperLedgerService.getAssetTransfer().subscribe(
      (response) => {
        this.transactions = response.json()
      },(error) => console.log(error)
    );
  }


  save(){
    let assetId = this.sampleForm.controls.assetId.value;
    let ownerId = this.sampleForm.controls.ownerId.value;
    assetId = "resource:org.example.mynetwork.Commodity#"+assetId;
    ownerId = "resource:org.example.mynetwork.Trader#"+ownerId;

    let transaction= new AssetTransfer(assetId, ownerId, null, null);

    console.log(transaction)
    this.hyperLedgerService.addAssetTransfer(transaction).subscribe(
      (response) => {
        console.log(response)
        this.loadData()
      },
      (error) => console.log(error)
    );
  }
}
