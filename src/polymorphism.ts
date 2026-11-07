export {};
class Employee {
    constructor(
        public name: string,
        // private _baseSalary: number, // can be access only inside Employee class
        protected _baseSalary: number, // can be access from the child class
    ) {}

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
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
