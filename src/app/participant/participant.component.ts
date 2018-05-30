import { Component, OnInit } from '@angular/core';
import {HyperledgerService} from '../services/Hyperledger.service';
import { User } from '../types/user.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participants: Array<User>;

  constructor(private hyperLedgerService: HyperledgerService) { }

  ngOnInit() {
    this.participants = this.hyperLedgerService.getUsers();
  }
}
