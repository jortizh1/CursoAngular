import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employess.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number;
  name: string;
  age: number;
  charge: string;
  state: string;


  constructor(private route: ActivatedRoute, private employeesServices: EmployeesService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = +id;
    const employee = this.employeesServices.getEmployee(+id); 
    this.name = employee.name;
    this.age = employee.age;
    this.charge = employee.charge;
    this.state = employee.state;

  }
  saveChanges(){
    this.employeesServices.setEmployee(this.id, {
      name: this.name,
      age: this.age,
      charge: this.charge,
      state: this.state
    });
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}