export class Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    salary: number;

    constructor(id: number,
        name: string,
        position: string,
        department: string,
        salary: number)
    {
        this.id=id;
        this.name=name;
        this.position=position;
        this.department=department;
        this.salary=salary;
    }
}
