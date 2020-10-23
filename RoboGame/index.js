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
        // логика боя 
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
    constructor(name, heals, damege) {
            this.name = name;
            this.heals = heals;
            this.damege = damege;
        }
        // получения урона 
    getDamege(damege) {
            this.heals = this.heals - damege;
        }
        // нанесения урона 
    doDamege() {
            return this.damege;
        }
        // усовия проигрыша 
    itsRobotLife() {
        return this.heals > 0;
    }
};
// начало боя
const game = new ArenaGame()
game.startGame()

// тяжелый класс робота
class Heavy extends Robots {
    constructor(name) {
        super(name, 150, 10);
        this.armor = 25
    }

    getDamege(damege) {
        this.heals = this.heals - (damege * (1 - this.armor / 100))
    }
}
// let roboLog = new Heavy('rob')
// roboLog.getDamege(10)
// console.log(roboLog)

class Assaut extends Robots {
    constructor(name) {
        super(name, 100, 20);
        this.critChance = 30;
    };
    doDamege() {
        let chance = Math.random() * 100
        if (chance > this.critChance) {
            return this.damege
        } else {
            return this.damege * 2
        }
    }
};

// let roboLog = new Assaut('Bob')

// console.log(roboLog.doDamege())

class Light extends Robots {
    constructor(name) {
        super(name, 100, 10);
        this.agility = 40;
    };
    getDamege(damege) {
        let chance = Math.random() * 100
        if (chance > this.agility) {
            this.heals = this.heals - damege;
        }
    }
};

let roboLog = new Light('Job')
roboLog.getDamege(20)
console.log(roboLog)