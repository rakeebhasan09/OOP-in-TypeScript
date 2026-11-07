class Employee {
    name: string = "Rakeeb";
    baseSalary: number = 23000;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee("Rakeeb", 25000);
const employee2 = new Employee("Hasan", 21500);

console.log(employee);
console.log(employee2);
