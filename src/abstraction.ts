abstract class Employee {
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

    abstract calculatePay(): number;
    abstract getResources(): string[];
    abstract registerEntryTime(): string;
}

class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 3000;
    }
}
