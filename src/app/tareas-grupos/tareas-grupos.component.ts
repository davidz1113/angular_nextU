import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas-grupos',
  templateUrl: './tareas-grupos.component.html',
  styleUrls: ['./tareas-grupos.component.css']
})
export class TareasGruposComponent implements OnInit {

  grupos: Object[];

  constructor() { }

  ngOnInit() {
    this.grupos = [
      {
        nombre: 'Trabajo',
        icono: 'business_center',
        resaltado: false
      },
      {
        nombre: 'Amigos',
        icono: 'people',
        resaltado: false
      },
      {
        nombre: 'Universidad',
        icono: 'school',
        resaltado: false
      }
    ];
  }


  onHoverGroupIn(item) {
    item.resaltado = true;
  }

  onHoverGroupOut(item) {
    item.resaltado = false;
  }
}
