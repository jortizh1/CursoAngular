import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  nombre = '';
  edad = 18;
  cargo = '';
  @Output() empleadoCreado = new EventEmitter<{nombre: string, edad: number, cargo: string}>();

  constructor() { }

  ngOnInit() {
  }

  agregarEmpleado(){
    this.empleadoCreado.emit({
      nombre:this.nombre,
      edad:this.edad,
      cargo:this.cargo
    });
  }
}
