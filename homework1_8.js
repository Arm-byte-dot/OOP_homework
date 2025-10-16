class CarRental {
  constructor(carModel, pricePerDay, days) {
    this.carModel = carModel
    this.pricePerDay = pricePerDay
    this.days = days
  }
  totalCost() {
    return this.pricePerDay * this.days
  }
  extend(days) {
    this.days += days
  }
}
let rental = new CarRental("BMW", 50, 5)
rental.extend(2)
console.log("Total Cost:", rental.totalCost())