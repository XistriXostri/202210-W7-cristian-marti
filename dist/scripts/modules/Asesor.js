import { Personaje } from './Personaje.js';
export class Asesor extends Personaje {
    characterHeAdvises;
    message = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(name, family, age, characterHeAdvises) {
        super(name, family, age);
        this.characterHeAdvises = characterHeAdvises;
    }
}
