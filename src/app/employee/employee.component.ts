import { Component, OnInit } from '@angular/core';
import { User } from '../types/user.model';
import { HyperledgerService } from '../services/Hyperledger.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  participants: User[] = [new User("name", "address", "phone", "email", "birthday", "gender", 123, 'key')];

  constructor(private hyperLedgerService: HyperledgerService) { }

  ngOnInit() {
    console.log(this.participants);
    // let user = new User("name", "address", "phone", "email", "birthday", "gender", 123, 'key');
    // this.participants = [user]
    ////////////////
    // this.participants = this.hyperLedgerService.getUsers();
  }
}
