/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ApigService } from '../apig.service';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  public nombre: '';
  public genData: any;

  constructor(public apig: ApigService ) { }

  generar(){
    this.apig.getGen(this.nombre).subscribe(result=>{
      this.genData=result['gender'];
    });
  }


  ngOnInit() {
  }

}
