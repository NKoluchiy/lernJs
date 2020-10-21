class ArenaGame {
    constructor() {
        this.playerOne = new Robots('C3PO');
        this.playerTwo = new Robots('R2D2');
        this.round = 0;
    }
    startGame() {
            let gemeOver = false;
            do {
                this.round++;
                gemeOver = this.__goRound();

            } while (gemeOver)
            console.log(this.round);
        }
        // цикл боя 
    __goRound() {
        this.playerTwo.getDamege(this.playerOne.doDamege())
        if (!this.playerTwo.itsRobotLife()) {
            console.log(`${this.playerOne.name} WIN!`)
            return false;
        } else {
            this.playerOne.doDamege(this.playerTwo.doDamege())
            if (!this.playerOne.itsRobotLife()) {
                console.log(`${this.playerTwo.name} WIN!`)
                return false;
            }
        }
        return true
    }
};
class Robots {
    constructor(name) {
        this.name = name;
        this.heals = 100;
        this.shot = 10;
    }
    getDamege(damege) {
        this.heals = this.heals - damege;
    }

    doDamege() {
        return this.shot;
    }

    itsRobotLife() {
        return this.heals > 0;
    }
};
const game = new ArenaGame()
game.startGame()