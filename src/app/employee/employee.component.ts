import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../types/user.model';
import { HyperledgerService } from '../services/Hyperledger.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  participants: User[];
  sampleForm;
  isSaveMode=true;
  isEditMode=false;

  constructor(private hyperLedgerService: HyperledgerService) {}

  ngOnInit() {
    this.hyperLedgerService.getUsers().subscribe(
      (response) => {
        this.participants = response.json()
      },(error) => console.log(error)
    );

    this.sampleForm = new FormGroup({
      'traderId': new FormControl(),
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'balance': new FormControl()
    });
  }

  loadData(){
    this.hyperLedgerService.getUsers().subscribe(
      (response) => {
        this.participants = response.json()
      },(error) => console.log(error)
    );
  }

  enableEditEmployee(event, user){
    this.sampleForm.setValue({
      traderId: user.traderId,
      firstName: user.firstName,
      lastName: user.lastName,
      balance: '123'
    });
    this.isSaveMode=false;
    this.isEditMode=true;
  }

  
  enableSaveMode(){
    this.sampleForm.setValue({
      traderId: "",
      firstName: "",
      lastName: "",
      balance: ""
    });
    this.isSaveMode=true;
    this.isEditMode=false;
    console.log("isSaveMode : "+ this.isSaveMode)
  }
  
  save() {
    let traderId = this.sampleForm.controls.traderId.value;
    let firstName = this.sampleForm.controls.firstName.value;
    let lastName = this.sampleForm.controls.lastName.value;
    let balance = this.sampleForm.controls.balance.value;
    if(this.isSaveMode){
      let user = new User(traderId, firstName, lastName, balance);
      this.hyperLedgerService.addUser(user);
    }
    if(this.isEditMode){
      let user = new User(traderId, firstName, lastName, balance);
      this.hyperLedgerService.updateUser(user).subscribe(
      (response)=>console.log(response),
      (error)=>console.log(error)
      );
    }
  }

  removeEmployee(event, user){
    this.hyperLedgerService.removeUser(user);
  }
}
