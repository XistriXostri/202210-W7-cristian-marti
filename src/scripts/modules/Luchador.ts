import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    public weapon: string;
    public skill: number;
    public message = 'Primero pego y luego pregunto';
    constructor(
        name: string,
        family: string,
        age: number,
        weapon: string,
        skill: number
    ) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
    }
}
