import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.css']
})
export class TareasPendientesComponent implements OnInit {
  tareas: string[];
  constructor() { }

  ngOnInit() {
    this.tareas = ['Recoger libros', 'Firmar autorización', 'Cita con María']
  }

}
