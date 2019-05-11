import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private users: Array<User> = [
    new User('Brahim', '123', 'admin'),
    new User('Youcef', '123', 'admin'),
    new User('Khaled', '123', 'costomer')
  ];
  
  logIn(username: string, password: string)
  {
    let user = this.users.find(
      u => {
        return (u.username===username && u.password==password);
      }      
    );

    if (user)
    {
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
    }
  }

  logOut()
  {
    localStorage.clear();
  }

  isLogIn()
  {
    return localStorage.getItem('username');
  }
  
  constructor() { }
}