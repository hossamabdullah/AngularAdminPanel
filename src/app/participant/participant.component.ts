import { Component, OnInit } from '@angular/core';
import {HyperledgerService} from '../services/Hyperledger.service';
import { User } from '../types/user.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participants: User[] = [new User("name", "address", "phone", "email", "birthday", "gender", 123, 'key')];

  constructor(private hyperLedgerService: HyperledgerService) { }

  ngOnInit() {
    console.log(this.participants);
    // let user = new User("name", "address", "phone", "email", "birthday", "gender", 123, 'key');
    // this.participants = [user]
    
    // this.participants = this.hyperLedgerService.getUsers();
  }
}
