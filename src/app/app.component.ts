import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home'},
    { title: 'Género', url: '/genero', icon: 'transgender'},
    { title: 'Edad', url: '/edad', icon: 'hourglass'},
    { title: 'Unis', url: '/uni', icon: 'laptop'},
    { title: 'Clima', url: '/clima', icon: 'rainy'},
    { title: 'Contratame', url: '/contratame', icon: 'person'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

