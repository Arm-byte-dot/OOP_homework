class SmartLamp {
  constructor(color, isOn) {
    this.color = color
    this.isOn = isOn
  }
  toggle() {
    this.isOn = !this.isOn
  }
  setColor(newColor) {
    this.color = newColor
  }
}

let lamp = new SmartLamp("white", false)
lamp.toggle()
lamp.setColor("blue")
console.log(lamp)