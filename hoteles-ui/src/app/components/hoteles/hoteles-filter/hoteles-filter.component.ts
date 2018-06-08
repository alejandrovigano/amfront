import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {HotelesServiceService} from "../../../services/hoteles-service.service";

@Component({
  selector: 'app-hoteles-filter',
  templateUrl: './hoteles-filter.component.html',
  styleUrls: ['./hoteles-filter.component.css']
})
export class HotelesFilterComponent implements OnInit {

  name: string;
  starAll: boolean;
  star5: boolean;
  star4: boolean;
  star3: boolean;
  star2: boolean;
  star1: boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private hotelService:HotelesServiceService) {
    this.selectAll();
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/search.svg'));
    iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filters/star.svg'));
  }

  ngOnInit() {
    this.doSearch();
  }

  selectAll(){
    this.starAll = true;
    this.star5 = false;
    this.star4 = false;
    this.star3 = false;
    this.star2 = false;
    this.star1 = false;
  }

  unselectAll(){
    this.starAll = false;
  }

  doSearch() {
    let stars:number[] = this.getStars();
    this.hotelService.search( this.name, stars );
  }

  doCleanSearch() {
    this.name="";
    this.selectAll();
    this.doSearch();
  }

  private getStars():number[] {
    let stars:number[] = [];
    if(this.star1){
      stars.push(1)
    }
    if(this.star2){
      stars.push(2)
    }
    if(this.star3){
      stars.push(3)
    }
    if(this.star4){
      stars.push(4)
    }
    if(this.star5){
      stars.push(5)
    }

    return stars;
  }
}
