import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  loginForm: FormGroup;
  submitted: boolean;  
  isLogIn: boolean;
  
  constructor(private logService: LogService) { }

  ngOnInit() 
  {
    this.initForm();
    this.submitted = false;
  }

  initForm()
  {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get username()
  {
    return this.loginForm.get('username');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  onSubmit()
  {
    this.submitted = true;    
    let username = this.username.value;
    let password = this.password.value;
    this.logIn(username, password);
  }
  
  public logIn(username: string, password: string)
  {
    this.logService.logIn(username, password);
    this.isLogIn = this.logService.isLogIn;
    if (this.isLogIn)
      console.log('is log in', this.logService.user.username);
    else
      console.log('Please try again');
  }
}