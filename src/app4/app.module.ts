import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';
import { EmpleadoService } from './empleado.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    NuevoEmpleadoComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }