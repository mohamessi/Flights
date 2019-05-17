import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../responses/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  root: string = 'https://demoblogtuto.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllUser()
  {
    return this.http.get<UserResponse>('https://demoblogtuto.herokuapp.com/user/all');
  }
}
