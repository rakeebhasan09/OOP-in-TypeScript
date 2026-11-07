class Employeee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        this._baseSalary = newSalary;
    }
}

const employeee = new Employeee("Rakeeb", 25000);
const employeee2 = new Employeee("Hasan", 21500);

console.log(employeee);
console.log(employeee2);
