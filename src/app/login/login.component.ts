import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';

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
  
  constructor(private logService: LogService, private router: Router) { }

  ngOnInit() 
  {
    this.initForm();
    this.submitted = false;
    this.isLogIn = this.logService.isLogIn;
    /* if (this.isLogIn)
    {
      this.router.navigate(['/']);
      console.log('login', this.isLogIn, 'redirected to Home!');
    } */
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
    this.isLogIn = this.logService.logIn(username, password);
    if (this.isLogIn)
    {
      console.log('is login', this.logService.user.username);
      this.router.navigate(['/']);
    }
    else
      console.log('Please try again, see users array in LogService');
  }
}