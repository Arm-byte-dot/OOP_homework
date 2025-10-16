class Clock {
  constructor(hours, minutes) {
    this.hours = hours
    this.minutes = minutes
  }
  showTime() {
    if (this.hours<10 && this.minutes<10) {
        console.log(`0${this.hours}:0${this.minutes}`)
    }else if(this.hours<10 && this.minutes>=10){
         console.log(`0${this.hours}:${this.minutes}`)
    }else{
         console.log(`${this.hours}:${this.minutes}`)
    }
  }
  addMinutes(min) {
    this.minutes += min
    this.hours += Math.floor(this.minutes / 60)
    this.minutes %= 60
    this.hours %= 24
  }
}

let clock = new Clock(23, 50)
clock.showTime()
clock.addMinutes(20)
clock.showTime()