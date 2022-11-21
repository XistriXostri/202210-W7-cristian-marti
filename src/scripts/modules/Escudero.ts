import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    public characterHeServes: string;
    public suckerDegree: number;
    constructor(
        name: string,
        family: string,
        age: number,
        characterHeServes: string,
        suckerDegree: number
    ) {
        super(name, family, age);
        this.characterHeServes = characterHeServes;
        this.suckerDegree = suckerDegree;
    }
    comunicar(): string {
        return 'Soy un loser';
    }
}
