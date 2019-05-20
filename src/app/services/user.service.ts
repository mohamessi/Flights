import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../responses/user-response';
import { User } from '../models/user';
import { Fligth } from '../models/fligth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Array<User> = [
    {
      id:	0,
      username:	'user',
      password:	'pass',
      role:	'USER',
      bookings: [
        new Fligth(0, 'AAA000', new Date('2019-05-20'), new Date('2019-05-25'), 'PARIS', 'LONDRES', 100),
        new Fligth(1, 'AAA001', new Date('2019-06-20'), new Date('2019-06-25'), 'PARIS', 'NEW YORK', 70)
      ]
    },
    {
      id:	1,
      username:	'admin',
      password:	'pass',
      role:	'ADMIN',
      bookings: []
    }
  ];

  root: string = 'https://demoblogtuto.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllUser()
  {
    return this.http.get<UserResponse>(this.root + '/user/all');
  }

  getUserBookings(id: number)
  {
    let user = this.users.find(
      u => {
        return (u.id === id);
      }
    );

    if (user)
      return user.bookings;
  }
}