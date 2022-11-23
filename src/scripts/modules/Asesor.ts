import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    public characterHeAdvises: string;
    public message = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(
        name: string,
        family: string,
        age: number,
        characterHeAdvises: string
    ) {
        super(name, family, age);
        this.characterHeAdvises = characterHeAdvises;
    }
}
