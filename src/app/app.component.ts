import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flights';

  public login(username: string, password: string){
    localStorage.setItem("username", username);
    console.log(localStorage.getItem("username"));
  }
}
