import { Component, OnInit, Input } from '@angular/core';
import { Fligth } from 'src/app/models/fligth';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor() { }

  @Input() private flight: Fligth;

  ngOnInit()
  {

  }
}