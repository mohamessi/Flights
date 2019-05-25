import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../responses/user-response';

const url: string = 'https://demoblogtuto.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser()
  {
    return this.http.get<UserResponse>(url + '/user/all');
  }
}
