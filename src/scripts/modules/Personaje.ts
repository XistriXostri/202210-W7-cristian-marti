export class Personaje {
    isAlive: boolean;
    serie: string;
    name: string;
    family: string;
    age: number;
    constructor(name: string, family: string, age: number) {
        this.isAlive = true;
        this.serie = 'Juego de tronos';
        this.name = name;
        this.family = family;
        this.age = age;
    }
    death() {
        return (this.isAlive = false);
    }
}
