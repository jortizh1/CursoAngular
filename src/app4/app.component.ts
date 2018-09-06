import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleados: {nombre: string, edad: number, cargo: string, estado: string}[] = [];

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleados = this.empleadoService.empleados;
  }

  /*empleadoAgregado(empleado:{nombre: string, edad: number, cargo: string }){
    this.empleados.push({
      nombre:empleado.nombre,
      edad:empleado.edad,
      cargo:empleado.cargo
    });
  }*/
}