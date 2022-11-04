/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiuService {

  constructor(public _http: HttpClient) { }

  getGen(university){
    return this._http.get('http://universities.hipolabs.com/search?country='+university+ '');
  }
}

