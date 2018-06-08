import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {HotelesFilterComponent} from "../hoteles-filter/hoteles-filter.component";

@Component({
  selector: 'app-hoteles-home',
  templateUrl: './hoteles-home.component.html',
  styleUrls: ['./hoteles-home.component.css']
})
export class HotelesHomeComponent implements OnInit {

  @ViewChild('filter') filter: HotelesFilterComponent;


  constructor() { }

  ngOnInit() {
    this.filter.doCleanSearch()
  }


}
