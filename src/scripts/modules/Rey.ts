import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    public regnalYears: number;
    public message = 'Vais a morir todos';
    constructor(
        name: string,
        family: string,
        age: number,
        regnalYears: number
    ) {
        super(name, family, age);
        this.regnalYears = regnalYears;
    }
}
