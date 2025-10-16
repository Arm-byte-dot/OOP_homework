
class GamePlayer {
  constructor(username, score) {
    this.username = username
    this.score = score
  }
  addPoints(points) {
    this.score += points
  }
  level() {
    if (this.score < 100){
        console.log("Level 1")
    }
    else if (this.score < 200) {
        console.log("Level 2")
    }
    else {
        console.log("Level 3")
    }
  }
}
let player1 = new GamePlayer("player1", 80)
player1.addPoints(50)
player1.level()
let player2 = new GamePlayer("player2", 200)
player2.addPoints(60)
player2.level()
let player3 = new GamePlayer("player3", 0)
player3.addPoints(20)
player3.level()