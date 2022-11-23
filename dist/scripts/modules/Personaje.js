export class Personaje {
    isAlive;
    serie;
    name;
    family;
    age;
    constructor(name, family, age) {
        this.isAlive = true;
        this.serie = 'Juego de tronos';
        this.name = name;
        this.family = family;
        this.age = age;
    }
    comunicar(message) {
        if (!this.isAlive)
            return;
        const communicationsTextDisplay = document.querySelector('.display-1');
        const communicationsDisplay = document.querySelector('.comunications');
        const communicationPictureDisplay = document.querySelector('.comunications img');
        if (communicationsTextDisplay &&
            communicationsDisplay &&
            communicationPictureDisplay) {
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
            const thumbsUp = document.querySelector(`#up${this.name}`);
            const thumbsDown = document.querySelector(`#down${this.name}`);
            const characterImage = document.querySelector(`#img${this.name}`);
            if (thumbsUp && thumbsDown && characterImage) {
                thumbsDown.style.display = 'initial';
                thumbsUp.style.display = 'none';
                characterImage.style.rotate = '180deg';
            }
        }
        this.isAlive = false;
    }
}
