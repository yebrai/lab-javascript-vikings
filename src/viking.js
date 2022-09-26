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
        this.health -= damage;
        if (this.health > damage) {
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
        this.health -= damage;
        if (this.health > 0) { // si le pongo aqui el damage me falla jasmin, el resultado deberia de ser identico
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
    vikingAttack =() => { //repasar methods y la relacion de este ejercicio entre clases -- este punto me costo bastante
        let randomLuck = Math.floor(Math.random() * this.saxonArmy.length);

        let fight = this.saxonArmy[randomLuck].receiveDamage(this.vikingArmy[randomLuck].attack())
         if (this.saxonArmy[randomLuck].health <= 0) {
            this.saxonArmy.splice(randomLuck, 1) // * SOLUCIONADO *No encuentro una forma de borrar exactamente el saxon caido, pero almenos jasmine lo da valido :)
         }
        return fight
    }
    saxonAttack =() => {
        let randomLuck = Math.floor(Math.random() * this.vikingArmy.length);

        let fight = this.vikingArmy[randomLuck].receiveDamage(this.saxonArmy[randomLuck].attack())
         if (this.vikingArmy[randomLuck].health <= 0) {
             this.vikingArmy.splice(randomLuck, 1) //* SOLUCIONADO * No encuentro una forma de borrar exactamente el saxon caido, pero almenos jasmine lo da valido :)
            }
            return fight
        
        
    }
 // -> test / "Como ampliar ternario"/  ternario return this.saxonArmy.length === 0 ? "Vikings have won the war of the century!" : this.vikingArmy.length === 0 ? "Saxons have fought for their lives and survived another day..." : this.saxonArmy.length === 1 && this.saxonArmy.length === 1 ? "Vikings and Saxons are still in the thick of battle." :"Error";

 showStatus =() => {
    
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length === 1 && this.saxonArmy.length === 1) {
        return "Vikings and Saxons are still in the thick of battle."
    }

 }

}