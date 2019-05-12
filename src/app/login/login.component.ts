import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  loginForm: FormGroup;

  constructor(private logService: LogService) { }

  ngOnInit() 
  {
    this.initForm();
    localStorage.clear();
  }

  initForm()
  {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public logIn(username: string, password: string)
  {
    this.logService.logIn(username, password);
    if (this.logService.isLogIn())
      console.log('is log in', this.logService.isLogIn())
    else
      console.log('Oups!');
  }

  onSubmit()
  {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    this.logIn(username, password);
  }
}