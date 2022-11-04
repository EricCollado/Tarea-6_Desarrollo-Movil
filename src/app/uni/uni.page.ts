/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ApiuService } from '../apiu.service';


@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage implements OnInit {
  public university: '';
  public nombre: any;
  constructor(public apiu: ApiuService) { }

  generar(){
    this.apiu.getGen(this.university).subscribe(result=>{
      this.nombre=result;
    });
  }

  ngOnInit() {
  }

}
