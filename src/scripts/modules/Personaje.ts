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

    comunicar(message: string) {
        if (!this.isAlive) return;

        const communicationsTextDisplay: HTMLElement | null =
            document.querySelector('.display-1');

        const communicationsDisplay: HTMLImageElement | null =
            document.querySelector('.comunications');

        const communicationPictureDisplay: HTMLImageElement | null =
            document.querySelector('.comunications img');

        if (
            communicationsTextDisplay &&
            communicationsDisplay &&
            communicationPictureDisplay
        ) {
            communicationsTextDisplay.innerHTML = message;
            communicationPictureDisplay.src = `./assets/img/${this.name}.jpg`;
            communicationPictureDisplay.alt = `${this.name} ${this.family}`;
            communicationsDisplay.classList.add('on');

            setTimeout(() => {
                communicationsDisplay?.classList.remove('on');
            }, 2000);
        }
    }

    die() {
        if (this.isAlive) {
            const thumbsUp: HTMLElement | null = document.querySelector(
                `#up${this.name}`
            );

            const thumbsDown: HTMLElement | null = document.querySelector(
                `#down${this.name}`
            );

            const characterImage: HTMLElement | null = document.querySelector(
                `#img${this.name}`
            );

            if (thumbsUp && thumbsDown && characterImage) {
                thumbsDown.style.display = 'initial';
                thumbsUp.style.display = 'none';
                characterImage.style.rotate = '180deg';
            }
        }

        this.isAlive = false;
    }
}
