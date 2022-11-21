import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    public regnalYears: number;
    constructor(
        name: string,
        family: string,
        age: number,
        regnalYears: number
    ) {
        super(name, family, age);
        this.regnalYears = regnalYears;
    }
    comunicar(): string {
        return 'Vais a morir todos';
    }
}
