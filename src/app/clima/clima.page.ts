/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ApicService } from '../apic.service';



@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  public genData: any;
  public resultado: any;
  public temp: any;
  constructor(public apic: ApicService ) { }

  generar(){
    this.apic.getGen().subscribe(result=>{
      this.genData=(result);
      this.resultado = JSON.stringify(this.genData['weather']);
      this.temp = JSON.stringify(this.genData['main']);
    });
  }


  ngOnInit() {
  }

}
