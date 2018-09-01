import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleados = [];

  empleadoAgregado(empleado:{nombre: string, edad: number, cargo: string }){
    this.empleados.push({
      nombre:empleado.nombre,
      edad:empleado.edad,
      cargo:empleado.cargo
    });
  }
}