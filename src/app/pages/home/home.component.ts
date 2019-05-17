import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logService: LogService, private router: Router) { }

  ngOnInit() {
    
  }

  logOut()
  {
    this.logService.logOut();
    this.router.navigate(['/login']);
  }
}
