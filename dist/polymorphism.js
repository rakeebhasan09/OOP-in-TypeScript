class Employee {
    name;
    _baseSalary;
    constructor(name, 
    // private _baseSalary: number, // can be access only inside Employee class
    _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value.");
        }
        this._baseSalary = newSalary;
    }
    calculatePay() {
        return this.baseSalary;
    }
}
const employee = new Employee("Rakeeb hasan", 21000);
console.log(employee.calculatePay());
export {};
