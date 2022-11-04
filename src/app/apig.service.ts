/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApigService {

  constructor(public _http: HttpClient) { }

  getGen(nombre){
    return this._http.get('https://api.genderize.io/?name='+nombre+ '');
  }
}

