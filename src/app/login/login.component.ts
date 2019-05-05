import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  public login(username: string, password: string){
    localStorage.setItem("username", username);
    console.log(localStorage.getItem("username"));
  }

}
