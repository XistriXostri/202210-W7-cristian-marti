import { Escudero } from './modules/Escudero.js';
import { Luchador } from './modules/Luchador.js';
import { Rey } from './modules/Rey.js';
import { Asesor } from './modules/Asesor.js';
import { personajes } from './modules/Personajes.js';

//Una función que cuando se cargue la pagina ejecute el script home si está en index.html o form si no lo está
// (() => {
//     document.addEventListener("DOMContentLoaded", () => {
//         if(location.pathname.includes("index")) {
//             home();
//         } else {
//             form()
//         }
//     })
// })();
// (() => {
//     document.addEventListener('DOMContentLoaded', () => {
//         // personajes.forEach(personaje => ultemplate += liTemplate)
//     });
// })();

const getEmoji = ({ personaje }) => {
    if (personaje instanceof Rey) return '👑';
    if (personaje instanceof Luchador) return '🗡';
    if (personaje instanceof Asesor) return '🎓';
    if (personaje instanceof Escudero) return '🛡';
};

const getFeatures = ({ personaje }) => {
    if (personaje instanceof Rey)
        return `<li>Años de reinado: ${personaje.regnalYears}</li>`;
    if (personaje instanceof Luchador) {
        return `<li>Arma: ${personaje.weapon}</li>
                    <li>Destreza: ${personaje.skill}</li>`;
    }
    if (personaje instanceof Asesor)
        return `<li>Asesora a: ${personaje.characterHeAdvises}</li>`;
    if (personaje instanceof Escudero) {
        return `<li>Peloteo: ${personaje.suckerDegree}</li>
                    <li>Sirve a: ${personaje.characterHeServes}</li>`;
    }
};
let ulTemplate = ``;

const PersonajeComponent = ({ personaje }) => {
    return `<div class="character__overlay">
                                <ul class="list-unstyled">
                                    ${getFeatures({ personaje })}
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn">
                                        habla
                                    </button>
                                    <button class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji">${getEmoji({ personaje })}</i>
                    </div>
                </li>\n`;
};

personajes.forEach((personaje) => {
    const defaultPersonajeTemplate = `<li class="character col">
                    <div class="card character__card">
                        <img
                            src="./assets/img/${personaje.name}.jpg"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${personaje.name} ${personaje.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${personaje.age} años</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-down"></i>
                                        <i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>`;

    ulTemplate += defaultPersonajeTemplate;
    ulTemplate += PersonajeComponent({ personaje });
});

console.log(ulTemplate);

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const li = document.querySelector('li') as HTMLLIElement;
        li.outerHTML = ulTemplate;
    });
})();
