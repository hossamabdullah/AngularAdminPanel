import { Component, OnInit } from '@angular/core';
import { User } from '../types/user.model';
import { HyperledgerService } from '../services/Hyperledger.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  participants: User[];

  constructor(private hyperLedgerService: HyperledgerService) { 
  }


  ngOnInit() {
    this.participants = this.hyperLedgerService.getUsers();
  }

  editEmployee(event, user:User){
    this.hyperLedgerService.updateUser(user);
    console.log(user);
  }

  removeEmployee(event, user){
    this.hyperLedgerService.removeUser(user);
  }
}
