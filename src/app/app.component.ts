import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //empleados: {nombre: string, edad: number, cargo: string, estado: string}[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  /*empleadoAgregado(empleado:{nombre: string, edad: number, cargo: string }){
    this.empleados.push({
      nombre:empleado.nombre,
      edad:empleado.edad,
      cargo:empleado.cargo
    });
  }*/
}