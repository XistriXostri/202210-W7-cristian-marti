import { Personaje } from './Personaje.js';
export class Rey extends Personaje {
    regnalYears;
    message = 'Vais a morir todos';
    constructor(name, family, age, regnalYears) {
        super(name, family, age);
        this.regnalYears = regnalYears;
    }
}
