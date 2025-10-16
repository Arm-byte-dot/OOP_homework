const prompt = require("prompt-sync")()
class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }
  toFahrenheit() {
    return (this.celsius * 9) / 5 + 32
  }
  toKelvin() {
    return this.celsius + 273.15
  }
}

let celsius = prompt("Enter the Tempreture(celsius)")
let temp = new Temperature(celsius)
console.log("Fahrenheit:", temp.toFahrenheit())
console.log("Kelvin:", temp.toKelvin())