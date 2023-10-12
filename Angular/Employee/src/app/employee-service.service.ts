import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees: Employee[] = [];
  private currentId = 1;

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    employee.id = this.currentId++;
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex((e) => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(employeeId: number) {
    this.employees = this.employees.filter((e) => e.id !== employeeId);
  }
}
