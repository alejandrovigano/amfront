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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('bathrobes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/bathrobes.svg'));
    iconRegistry.addSvgIcon('bathtub', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/bathtub.svg'));
    iconRegistry.addSvgIcon('beach', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/beach.svg'));
    iconRegistry.addSvgIcon('beach-pool-facilities', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/beach-pool-facilities.svg'));
    iconRegistry.addSvgIcon('business-center', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/business-center.svg'));
    iconRegistry.addSvgIcon('children-club', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/children-club.svg'));
    iconRegistry.addSvgIcon('coffe-maker', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/coffe-maker.svg'));
    iconRegistry.addSvgIcon('deep-soaking-bathtub', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/deep-soaking-bathtub.svg'));
    iconRegistry.addSvgIcon('fitness-center', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/fitness-center.svg'));
    iconRegistry.addSvgIcon('garden', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/garden.svg'));
    iconRegistry.addSvgIcon('kitchen-facilities', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/kitchen-facilities.svg'));
    iconRegistry.addSvgIcon('newspaper', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/newspaper.svg'));
    iconRegistry.addSvgIcon('nightclub', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/nightclub.svg'));
    iconRegistry.addSvgIcon('restaurant', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/restaurant.svg'));
    iconRegistry.addSvgIcon('safety-box', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/safety-box.svg'));
    iconRegistry.addSvgIcon('separate-bredroom', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/separate-bredroom.svg'));
    iconRegistry.addSvgIcon('sheets', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/amenities/sheets.svg'));
  }

  ngOnInit() {
  }

}
