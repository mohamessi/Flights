import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
    
   }

  ngOnInit() {
  }

  public login(username: string, password: string){

    localStorage.setItem("username", username);
    console.log("is log in",localStorage.getItem("username"));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    let username = this.loginForm.get("username").value;
    let password = this.loginForm.get("password").value;
    this.login(username,password);
  }

}
