const prompt = require("prompt-sync")()
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  area() {
    return Math.PI * this.radius ** 2
  }
  circumference() {
    return 2 * Math.PI * this.radius
  }
}

let radius = prompt("Enter the radius: ")
let circle = new Circle(radius)
console.log("Area:", circle.area())
console.log("Circumference:", circle.circumference())