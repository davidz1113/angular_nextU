import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { TareasGruposComponent } from './tareas-grupos/tareas-grupos.component';
import { TareasHoyComponent } from './tareas-hoy/tareas-hoy.component';
import { TareasPendientesComponent } from './tareas-pendientes/tareas-pendientes.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    TareasGruposComponent,
    TareasHoyComponent,
    TareasPendientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
