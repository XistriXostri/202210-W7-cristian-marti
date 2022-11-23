import { Personaje } from './Personaje.js';
export class Escudero extends Personaje {
    characterHeServes;
    suckerDegree;
    message = 'Soy un loser';
    constructor(name, family, age, characterHeServes, suckerDegree) {
        super(name, family, age);
        this.characterHeServes = characterHeServes;
        this.suckerDegree = suckerDegree;
    }
}
