import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {HotelesHomeComponent} from './components/hoteles/hoteles-home/hoteles-home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';


import { HotelesCardComponent } from './components/hoteles/hoteles-card/hoteles-card.component';
import { HotelesListComponent } from './components/hoteles/hoteles-list/hoteles-list.component';
import { HotelesFilterComponent } from './components/hoteles/hoteles-filter/hoteles-filter.component';

import { StarsComponent } from './components/common/stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelesHomeComponent,
    HotelesCardComponent,
    HotelesListComponent,
    HotelesFilterComponent,
    StarsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
