import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesService } from './services/employess.service';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},  
  {path: 'employees',
  canActivate:[AuthGuardService],
  component: EmployeesComponent,
  children: [
    {path: ':id', component: EmployeeComponent},
    {path: ':id/edit', component: EditEmployeeComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    EmployeeComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EmployeesService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }