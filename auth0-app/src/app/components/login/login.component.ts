import { Component, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  //create auth in constructor
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    //when call the component login, open the auth0
    this.auth.loginWithRedirect()
  }
}
