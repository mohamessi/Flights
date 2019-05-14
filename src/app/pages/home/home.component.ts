import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour : 'numeric' , minute : 'numeric' };
  date1 = new Date(2018,3,3,12,0) ;
  date2 =  new Date(2018,3,3,14,0) ;
  flights = [
    {
       villeDepart:"Paris",
       villeArrivee:"Barcelone" ,
       "dateDepart": this.date1.toLocaleDateString("en-US", this.options)  ,
       "dateArrivee": this.date2.toLocaleDateString("en-US", this.options)
     } ,
   {
     villeDepart:"Paris",
   villeArrivee:"Barcelone" ,
   "dateDepart": this.date1.toLocaleDateString("en-US", this.options)  ,
   "dateArrivee": this.date2.toLocaleDateString("en-US", this.options)
 }
  ]
}
