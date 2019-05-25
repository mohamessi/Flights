import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

//utiliser les ressources login logout...
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
      },
      err => {
        console.error('error', err);
      }
    );
  }
  
  //appeler la ressource user/login
  logIn(username: string, password: string)
  {
    if (this.users)
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
  }

  //appeler la ressource logout
  logOut()
  {
    localStorage.clear();
    console.log('Logged out!')
  }

  isLogIn(): boolean
  {
    return localStorage.getItem('username') ? true : false;
/*     if (localStorage.getItem('username'))
      return true;
    else
      return false;
 */  }

//renommer les méthodes  
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