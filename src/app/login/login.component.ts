import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {User} from '../types/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log("insied login component")
  }

  login(){
    var firstName = this.loginForm.form.controls.firstName.value
    var password = this.loginForm.form.controls.password.value
    var user = new User(null, firstName, null, null)
    user.password = password
    this.authService.login(user)
  }
}
