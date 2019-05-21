import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/app/services/log.service';
import { Fligth } from 'src/app/models/fligth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private id: number;  
  private username: string;
  private role: string;
  private bookings: Array<Fligth>;

  constructor(private logService: LogService, private userService: UserService) { }

  ngOnInit() 
  {
    /* this.id = +this.logService.getIdUser();
    this.username = this.logService.getUserLog();
    this.role = this.logService.getUserRole(); */
    this.id = +localStorage.getItem('id');
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    if (this.username)
      this.bookings = this.userService.getUserBookings(this.id);
  }
}