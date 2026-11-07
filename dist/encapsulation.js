class Employeee {
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
        this._baseSalary = newSalary;
    }
}
const employeee = new Employeee("Rakeeb", 25000);
const employeee2 = new Employeee("Hasan", 21500);
console.log(employeee);
console.log(employeee2);
export {};
