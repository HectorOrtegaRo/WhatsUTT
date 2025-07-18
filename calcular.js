function calcular(a, b, operacion) {
  if (operacion === 'suma') {
    return a + b;
  } else if (operacion === 'resta') {
    return a - b;
  } else {
    return 'Operación no válida';
  }
}


console.log(calcular(10, 5, 'suma'));  // 15
console.log(calcular(10, 5, 'resta')); // 5
console.log(calcular(10, 5, 'multiplica'));
