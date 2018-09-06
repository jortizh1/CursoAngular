import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  nombre = '';
  edad = 18;
  cargo = '';
  estado = 'Activo';
  //@Output() empleadoCreado = new EventEmitter<{nombre: string, edad: number, cargo: string}>();


  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  agregarEmpleado(){
    this.empleadoService.agregarEmpleado({
      nombre:this.nombre,
      edad:this.edad,
      cargo:this.cargo,
      estado: this.estado
    });
  }
}