const calcular = require('./calcular'); // Si tienes la función en otro archivo llamado calcular.js

// Pruebas de suma
console.assert(calcular(10, 5, 'suma') === 15, 'Error en suma: 10 + 5 debe ser 15');
console.assert(calcular(-2, 2, 'suma') === 0, 'Error en suma: -2 + 2 debe ser 0');
console.assert(calcular(0, 0, 'suma') === 0, 'Error en suma: 0 + 0 debe ser 0');

// Pruebas de resta
console.assert(calcular(10, 5, 'resta') === 5, 'Error en resta: 10 - 5 debe ser 5');
console.assert(calcular(0, 10, 'resta') === -10, 'Error en resta: 0 - 10 debe ser -10');
console.assert(calcular(-5, -5, 'resta') === 0, 'Error en resta: -5 - (-5) debe ser 0');

