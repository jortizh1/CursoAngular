import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleados = [{
    nombre: 'Pepito',
    edad: 20,
    cargo: 'Ingeniero',
    estado: 'Activo'
  }];

  agregarEmpleado(empleado:{nombre: string, edad: number, cargo: string, estado: string }){
    this.empleados.push(empleado);
  }

  actualizarEstado(id: number, estado: string){
    this.empleados[id].estado = estado;
  }

  constructor() { }
}