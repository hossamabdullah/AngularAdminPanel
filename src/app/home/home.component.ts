import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sampleForm;

  constructor() { }

  ngOnInit() {
    this.sampleForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl(),
    });
  }

  save() {
    let username = this.sampleForm.controls.username.value;
    let password = this.sampleForm.controls.password.value;
    console.log("form submitted with username and password as "+username+", "+password);
  }

}
