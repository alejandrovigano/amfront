import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";
import {Hotel} from "../../../model/Hotel";

@Component({
  selector: 'app-hoteles-card',
  templateUrl: './hoteles-card.component.html',
  styleUrls: ['./hoteles-card.component.css']
})
export class HotelesCardComponent implements OnInit {

  @Input()
  hotel: Hotel;

  ngOnInit() {
  }

}
