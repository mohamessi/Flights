import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
      
  private users: Array<User>;

  constructor(private userService: UserService) 
  {
    userService.getAllUser().subscribe(
      data => {
        this.users = data.content;
      }
    );
  }
  
  logIn(username: string, password: string)
  {
    let user = this.users.find(
      u => {
        return (u.username===username && u.password==password);
      }      
    );

    if (user)
    {
      localStorage.setItem('id', String(user.id));
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
    }
  }

  logOut()
  {
    localStorage.clear();
    console.log('Logged out!')
  }

  isLogIn(): boolean
  {
    if (localStorage.getItem('username'))
      return true;
    else
      return false;
  }

  getIdUser()
  {
    return (localStorage.getItem('id'));
  }
  
  getUserLog()
  {
    return (localStorage.getItem('username'));
  }

  getUserRole()
  {
    return (localStorage.getItem('role'));
  }
}