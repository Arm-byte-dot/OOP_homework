const prompt = require("prompt-sync")()
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
  perimeter() {
    return 2 * (this.width + this.height)
  }
}

let width = prompt("Enter the width"); 
let height = prompt("Enter the height")
let rect = new Rectangle(width, height)
console.log("Area:", rect.area())
console.log("Perimeter:", rect.perimeter())