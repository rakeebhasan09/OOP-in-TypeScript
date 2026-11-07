class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
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
    describe() {
        return `${this.name} earns ${this.baseSalary} tk`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
        teamMemberCount = teamMemberCount;
    }
}
const employee = new Employee("Rakeeb", 25000);
const manager = new Manager("Manager Hasan", 25000, 17);
// console.log(employee.describe());
console.log(manager.describe());
console.log(manager);
export {};
