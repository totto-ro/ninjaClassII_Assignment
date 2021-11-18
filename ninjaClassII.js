class Ninja{
    constructor( name, health, _speed, _strength ){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.showStats = function(){
            console.log(`Name: ${this.name}, Health: ${this.health}, Speed:  ${speed}, Strength:  ${strength}` );
        }

        this.kick = function( ninja ) {
            if( ninja instanceof Ninja){
                let injury = strength * 15;
                ninja.health -= injury;
                console.log(`${ninja.name} was kicked by ${this.name} and lost ${injury} in Health!`);
            }
            else{
                console.log( `${ninja.name} is not a ninja!!!` );
            }
        }
    }

    sayName(){
        console.log( `My ninja name is ${this.name}!` );
    } 


    drinkSake(){
        this.health += 10;
    }

    punch( ninja ){
        if( ninja instanceof Ninja ){
            ninja.health -= 5;
            console.log( `${ninja.name} was punched by ${this.name} and lost 5 in Health!` );
        }
        else{
            console.log( `${ninja.name} is not a ninja!!!` );
        }
    }

}

let ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();
ninja1.showStats();

let blueNinja = new Ninja("Goemon");
let redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
redNinja.showStats();