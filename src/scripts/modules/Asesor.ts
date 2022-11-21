import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    public characterHeAdvises: string;
    constructor(
        name: string,
        family: string,
        age: number,
        characterHeAdvises: string
    ) {
        super(name, family, age);
        this.characterHeAdvises = characterHeAdvises;
    }
    comunicar(): string {
        return 'No sé por qué, pero creo que voy a morir pronto';
    }
}
