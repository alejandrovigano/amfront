import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteles-filter',
  templateUrl: './hoteles-filter.component.html',
  styleUrls: ['./hoteles-filter.component.css']
})
export class HotelesFilterComponent implements OnInit {

  name : string;
  stars : number;

  constructor() { }

  ngOnInit() {
    this.name = "asdfx";
  }

}
