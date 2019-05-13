import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  user: User;
  isLogIn: boolean;
  
  private users: Array<User> = [
    new User('Brahim', '123', 'admin'),
    new User('Youcef', '123', 'admin'),
    new User('Khaled', '123', 'costomer')
  ];

  constructor() { }
  
  logIn(username: string, password: string): boolean
  {
    this.user = this.users.find(
      u => {
        return (u.username===username && u.password==password);
      }      
    );

    if (this.user)
      this.isLogIn = true;
    else
      this.isLogIn = false;

    return this.isLogIn;
  }

  logOut()
  {
    this.isLogIn = false;
  }
}