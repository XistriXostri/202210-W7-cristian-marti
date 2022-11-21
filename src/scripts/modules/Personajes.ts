import { Asesor } from './Asesor.js';
import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Escudero } from './Escudero.js';

export const personajes = [
    new Rey('Joffrey', 'Baratheon', 14, 2),
    new Luchador('Jaime', 'Lannister', 34, 'espada', 8),
    new Luchador('Daenerys', 'Targaryen', 16, 'dragón', 10),
    new Asesor('Tyrion', 'Lannister', 27, 'Daenerys'),
    new Escudero('Bronn', '', 40, 'Jaime', 1),
];
