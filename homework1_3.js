class Employee {
  constructor(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
  }
  show() {
    console.log(`${this.name}, ${this.position}, Salary: ${this.salary}`)
  }
  bonus(percent) {
    this.salary += this.salary * (percent / 100)
  }
}
let emp = new Employee("Anna", "Manager", 2000)
emp.bonus(10)
emp.show()