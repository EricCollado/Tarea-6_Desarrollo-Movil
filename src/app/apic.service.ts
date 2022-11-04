/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicService {

  constructor(public _http: HttpClient) { }

  getGen(){
    // eslint-disable-next-line max-len
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?lat=18.735693&lon=-70.162651&appid=d683b8413be0095e43ccffadd121b110&lang=sp&units=metric');
  }
}

