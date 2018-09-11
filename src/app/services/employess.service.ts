export class EmployeesService {

  employee = [
    {
        name: 'Pepito',
        age: 20,
        charge: 'Ingeniero',
        state: 'Activo'
    },
    {
        name: 'Juan',
        age: 34,
        charge: 'Ingeniero',
        state: 'Activo'
    }];

    getEmployee(id: number){
        return this.employee[id];
    }

    setEmployee(id:number, employeex:{name: string, age: number, charge: string, state: string}){        
        this.employee[id] = employeex;
     }
}