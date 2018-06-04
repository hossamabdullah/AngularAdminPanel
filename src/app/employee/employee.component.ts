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

  constructor(private hyperLedgerService: HyperledgerService) { 
  }


  ngOnInit() {
    this.participants = this.hyperLedgerService.getUsers();

    this.sampleForm = new FormGroup({
      'name': new FormControl(),
      'address': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'birthday': new FormControl(),
      'gender': new FormControl(),
      'balance': new FormControl(),
      'key': new FormControl(),
    });

    console.log(this.sampleForm)
    
  }

  enableEditEmployee(event, user:User){
    this.sampleForm.setValue({
      name: user.name,
      address: user.address,
      phone: user.phone,
      email: user.email,
      birthday: user.birthday,
      gender: user.gender,
      balance: user.balance,
      key: user.key
    });
    this.isSaveMode=false;
    this.isEditMode=true;

    this.hyperLedgerService.updateUser(user);
  }

  removeEmployee(event, user){
    this.hyperLedgerService.removeUser(user);
  }

  enableSaveMode(){
    this.sampleForm.setValue({
      name: "",
      address: "",
      phone: "",
      email: "",
      birthday: "",
      gender: "",
      balance: "",
      key: ""
    });
    this.isSaveMode=true;
    this.isEditMode=false;
    console.log("isSaveMode : "+ this.isSaveMode)
  }
  
  save() {
    let name = this.sampleForm.controls.name.value;
    let address = this.sampleForm.controls.address.value;
    let phone = this.sampleForm.controls.phone.value;
    let email = this.sampleForm.controls.email.value;
    let birthday = this.sampleForm.controls.birthday.value;
    let gender = this.sampleForm.controls.gender.value;
    let balance = this.sampleForm.controls.balance.value;
    let key = this.sampleForm.controls.key.value;
    if(this.isSaveMode){
      let user = new User(name, address, phone, email, birthday, gender, balance, key);
      //TODO save
    }
    if(this.isEditMode){
      let user = new User(name, address, phone, email, birthday, gender, balance, key);
      //TODO edit
    }
  }
}
