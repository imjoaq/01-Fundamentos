// 1

function saludar(nombre) {
  //   console.log(arguments);
  //   console.log('Hola ' + nombre);
  return 10;

  //esto nunca se va a ejecutar
  console.log(' Soy un codigo que esta despues del return');
}

const saludar2 = function (nombre) {
  console.log('Hola ' + nombre);
};

const saludarFlecha = () => {
  console.log('Hola Flecha');
};

const saludarFlecha2 = (nombre) => {
  console.log('Hola ' + nombre);
};

const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica'); //1
// console.log({retornoDeSaludar});
// saludar2('Fernando');

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a, b) {
  return 'Hola Mundo';
}

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

// const sumar2 = (a, b) => {
//   return a + b;
// };

//En una funcion de flecha, que no tenga llaves {}
//getAleatorio2()

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
