export class Personaje {
    isAlive: boolean;
    serie: string;
    constructor(name: string, family: string, age: number) {
        this.isAlive = true;
        this.serie = 'Juego de tronos';
    }
    death() {
        return (this.isAlive = false);
    }
}
