import {EventEmitter, Injectable, Output} from '@angular/core';
import {Hotel} from "../model/Hotel";
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HotelesServiceService {

  env = environment;

  constructor(private http: HttpClient) {
  }

  @Output() refreshList: EventEmitter<Hotel[]> = new EventEmitter();

  search(name:string, stars: number[]){

    let params = new HttpParams()
      .append('name', name)
      .append('stars', stars.join(','));

    this.http.get<Hotel[]>(this.env.hotelesApiUrl, { params : params }).subscribe(value => {
      this.refreshList.emit(value)
    })
  }
}
