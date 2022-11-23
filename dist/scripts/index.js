import { Escudero } from './modules/Escudero.js';
import { Luchador } from './modules/Luchador.js';
import { Rey } from './modules/Rey.js';
import { Asesor } from './modules/Asesor.js';
import { personajes } from './modules/Personajes.js';
const getEmoji = (character) => {
    if (character instanceof Rey)
        return '👑';
    if (character instanceof Luchador)
        return '🗡';
    if (character instanceof Asesor)
        return '🎓';
    if (character instanceof Escudero)
        return '🛡';
};
const getFeatures = (character) => {
    if (character instanceof Rey)
        return `<li>Años de reinado: ${character.regnalYears}</li>`;
    if (character instanceof Luchador) {
        return `<li>Arma: ${character.weapon}</li>
                    <li>Destreza: ${character.skill}</li>`;
    }
    if (character instanceof Asesor)
        return `<li>Asesora a: ${character.characterHeAdvises}</li>`;
    if (character instanceof Escudero) {
        return `<li>Peloteo: ${character.suckerDegree}</li>
                    <li>Sirve a: ${character.characterHeServes}</li>`;
    }
};
const createCharacterTemplate = (character) => {
    return `        <div class="card character__card">
                        <img
                            src="./assets/img/${character.name}.jpg"
                            alt="${character.name} ${character.family}"
                            class="character__picture card-img-top"
                            id="img${character.name}"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${character.name} ${character.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${character.age} años</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-down" id="down${character.name}"></i>
                                        <i class="fas fa-thumbs-up" id="up${character.name}"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                    ${getFeatures(character)}
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn" id="comunicate${character.name}">
                                        habla
                                    </button>
                                    <button class="character__action btn" id="die${character.name}">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${getEmoji(character)}</i>
                    </div>`;
};
const ul = document.querySelector('ul');
const displayCharacter = (character) => {
    const newLi = document.createElement('li');
    newLi.className = 'character col';
    newLi.innerHTML = createCharacterTemplate(character);
    ul?.appendChild(newLi);
    const comunicateButton = document.querySelector(`#comunicate${character.name}`);
    comunicateButton?.addEventListener('click', () => {
        character.comunicar(character.message);
    });
    const dieButton = document.querySelector(`#die${character.name}`);
    dieButton?.addEventListener('click', () => {
        character.die();
    });
};
personajes.forEach((character) => displayCharacter(character));
