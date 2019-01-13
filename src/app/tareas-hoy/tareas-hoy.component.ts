import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas-hoy',
  templateUrl: './tareas-hoy.component.html',
  styleUrls: ['./tareas-hoy.component.css']
})
export class TareasHoyComponent implements OnInit {
  tareasHoy: string[];
  valor1 = 'Mi mensaje ';
  fecha1 = new Date(2010, 10, 20);
  numero1 =20;
  constructor() { }

  ngOnInit() {
    this.tareasHoy = ['Firmar autorización'];

  }

}
