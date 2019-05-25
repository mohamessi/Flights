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
      
  constructor(private logService: LogService, private router: Router) { }

  //mettre le contenu de ngOnInit() dans des fonctions
  ngOnInit() 
  {
    this.initForm();
    this.submitted = false;
    if (this.isLogin)
    {
      this.routerHome();
      console.log('login', this.isLogin, 'redirected to Home!');
    }
  }

  initForm()
  {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get isLogin()
  {
    return this.logService.isLogIn();
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
    //vérifier que le formulaire est valide
    this.submitted = true; 
    this.logIn(this.username.value, this.password.value);
  }

  routerHome()
  {
    this.router.navigate(['/']);
  }
  
  public logIn(username: string, password: string)
  {
    this.logService.logIn(username, password);
    if (this.isLogin)
    {
      console.log(this.logService.getUserLog(), 'is logged');
      this.routerHome();
    }
    else
      console.log('Please try again');
  }
}