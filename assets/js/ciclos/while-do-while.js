const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < carros.length) {
//   console.log(carros[i]);
//   // i = 1 + 1;
//   i++;
// }
console.warn('While');
//Undefined
// null
// false
while (carros[i]) {
  if (i === 1) {
    // break;
    i++;
    continue;
  }

  console.log(carros[i]);
  i++;
}

console.warn('Do While');
