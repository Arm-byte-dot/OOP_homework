class City {
  constructor(name, population, country) {
    this.name = name
    this.population = population
    this.country = country
  }
  info() {
    console.log(`${this.name}, ${this.country} - Population: ${this.population}`)
  }
  grow(amount) {
    this.population += amount
  }
}
let city = new City("Yerevan", 1100000, "Armenia")
city.grow(5000)
city.info()