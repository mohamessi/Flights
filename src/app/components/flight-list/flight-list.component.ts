import { Component, OnInit, Input } from '@angular/core';

import { Fligth } from 'src/app/models/fligth';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  @Input() private flights: Fligth[];
  
  constructor() { }

  ngOnInit() 
  {
    
  }
}
