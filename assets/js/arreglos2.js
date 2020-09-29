let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = [juegos[2 - 2]];
let ultimo = [juegos[juegos.length - 1]];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud });

nuevaLongitud = juegos.unshift('Fire-Emblem');
console.log({ nuevaLongitud });

let juegoBorrado = juegos.pop('F-Zero');
console.log({ juegoBorrado, juegos });
