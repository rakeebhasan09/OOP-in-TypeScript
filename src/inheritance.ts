export {};
class Employee {
    constructor(
        public name: string,
        private _baseSalary: number, // can be access only inside Employee class
        // protected _baseSalary: number // can be access from the child class
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

    describe(): string {
        return `${this.name} earns ${this.baseSalary} tk`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        _baseSalary: number,
        public teamMemberCount: number,
    ) {
        super(name, _baseSalary);
        teamMemberCount = teamMemberCount;
    }
}

const employee = new Employee("Rakeeb", 25000);
const manager = new Manager("Manager Hasan", 25000, 17);

// console.log(employee.describe());
console.log(manager.describe());
console.log(manager);
