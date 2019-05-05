import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.scss']
})
export class AddFlightsComponent implements OnInit {

  constructor() { 
    this.login("mohamed","pass");
  }

  ngOnInit() {
  }

  public login(username: string, password: string){
    localStorage.setItem("username", username);
    localStorage.removeItem("username");
    console.log(localStorage.getItem("username"));
    
  }

}
