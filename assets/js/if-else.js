let a = 10;

// if (a >= 10) { // undefined, null, una asignacion
//   console.log('A es mayor o igual a 10');
// } else {
//   console.log('A es menor a 10');
// }

// console.log('Fin de programa');//

const hoy = new Date(); // {}

dia = Math.floor(Math.random() * 6);
// let dia = hoy.getDate(); // 0: Domingo: 1: lunes, 2: martes....

console.log({ dia });

// console.log((dia = '5'));

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');

  //   if (dia === 1) {
  //     console.log('Lunes');
  //   } else {
  //     console.log('No es lunes ni domingo');
  //   }
  //
} else if (dia === 2) {
  console.log('Martes');
} else {
  console.log('No es lunes, martes o domingo');
}

// Sin usar if Else, o Switch, unicamentte objetos
// dia = Math.floor(Math.random() * 6); // 0:doming, 1: lunes...container

const diaLetras = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado',
};

// dia de la semana
console.log('Es:', diaLetras[dia] || 'Dia no definido');

// console.log(Math.random())
// console.log(Math.floor(Math.random() * 10))
