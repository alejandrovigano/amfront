import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../../model/Hotel";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() stars : number;
  Arr = Array; //exporto para iterar en el template

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'star',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/star.svg'));
  }

  ngOnInit() {
  }

}
