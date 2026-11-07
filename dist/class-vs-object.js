"use strict";
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("Rakeeb", 25000);
const employee2 = new Employee("Hasan", 21500);
console.log(employee);
console.log(employee2);
