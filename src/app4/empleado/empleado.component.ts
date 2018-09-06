import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() emp:{nombre: string, edad: number, cargo: string, estado: string };
  @Input() id;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  actualizarEstado(){
    this.emp.estado = this.emp.estado == 'Activo' ? 'Inactivo' : 'Activo';
    this.empleadoService.actualizarEstado(this.id, this.emp.estado);
  }
}