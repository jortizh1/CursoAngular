import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employess.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id: number;
  employee:{
       name: string, 
       age: number,
       charge: string,
       state: string
  };
  constructor(private employeeService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = +id;
    this.employee = this.employeeService.getEmployee(+id);
    this.route.params.subscribe(
      (params: Params) => {
        this.employee = this.employeeService.getEmployee(+params['id']);
        this.id = +params['id'];
      }
    );
  }
  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route})
    //this.router.navigate(['/employess', this.id, 'edit']);
  }
}