import { Personaje } from './Personaje.js';
export class Luchador extends Personaje {
    weapon;
    skill;
    message = 'Primero pego y luego pregunto';
    constructor(name, family, age, weapon, skill) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
    }
}
