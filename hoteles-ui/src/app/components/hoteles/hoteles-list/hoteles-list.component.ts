import { Component, OnInit } from '@angular/core';
import {Hotel} from "../../../model/Hotel";
import {HotelesServiceService} from "../../../services/hoteles-service.service";

@Component({
  selector: 'app-hoteles-list',
  templateUrl: './hoteles-list.component.html',
  styleUrls: ['./hoteles-list.component.css']
})
export class HotelesListComponent implements OnInit {

  hoteles:Hotel[];

  constructor(private hotelesServiceService:HotelesServiceService) {
    this.hotelesServiceService.refreshList.subscribe(hoteles => {
      this.hoteles = hoteles;
    });
  }

  ngOnInit() {

  }

}
