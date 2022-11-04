/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ApieService } from '../apie.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  public nombre: '';
  public edadData: any;
  public estado = '';
  constructor(public apie: ApieService) { }

  generar(){
    this.edadData = '';
    this.estado = '';
    this.apie.getGen(this.nombre).subscribe(result=>{
      this.edadData=result['age'];
      console.log(this.edadData);
      if(this.edadData <= 20){
        this.estado = 'Joven';
      }
      else if(this.edadData  >= 21 && this.edadData <= 65) {
        this.estado = 'Adulto/a';
      }
      else if(this.edadData  >= 66) {
        this.estado = 'Anciano/a';
      }
    });
  }
  ngOnInit() {
  }

}
