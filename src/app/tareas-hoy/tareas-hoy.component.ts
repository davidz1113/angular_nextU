import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas-hoy',
  templateUrl: './tareas-hoy.component.html',
  styleUrls: ['./tareas-hoy.component.css']
})
export class TareasHoyComponent implements OnInit {
  tareasHoy : string[];

  constructor() { }

  ngOnInit() {
    this.tareasHoy = ['Firmar autorización'];

  }

}
