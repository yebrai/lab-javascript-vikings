// Soldier
class Soldier {
    constructor(healthParam, strengthParam) {
        this.health = healthParam;
        this.strength = strengthParam
    }

    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
         this.health = this.health - damage
    }
}
    
// Viking
class Viking extends Soldier {
    constructor(nameParam, healthParam, strengthParam) {
        super(healthParam, strengthParam)
        this.name = nameParam
    }

    receiveDamage = (damage) => {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= damage) {
            return `${this.name} has died in act of combat` 
        }
    }
    
 battleCry = () => {
    return "Odin Owns You All!"
}
}


// Saxon
class Saxon extends Soldier {
    
    constructor(healthParam, strengthParam) {
    super(healthParam, strengthParam)
    }


    receiveDamage = (damage) => {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= damage) {
            return "A Saxon has died in combat" 
        }

    }  
    
}

// War
class War {
    constructor () {
        this.vikingArmy = [];     
        this.saxonArmy = []  
    }
    addViking =(vikingObj) => {
        this.vikingArmy.push(vikingObj)
    }
    addSaxon =(saxonObj) => {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack =() => {
        randomSaxon = Math.random() / this.saxonArmy.length;
        ramdomInt = Math.floor(random);
        if (Saxon.receiveDamage() = Viking.strength) {
            this.saxonArmy.pop()
        }
        
    }
    saxonAttack =() => {

    }
    showStatus =() => {

    }

}
