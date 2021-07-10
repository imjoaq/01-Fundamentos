//

const getAleatorio = () => Math.random();
console.log(getAleatorio());

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
  //   console.log({ edad, args });
  return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  'Fernando',
  'Hola'
);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({ nuevoApellido });

const Tony = {
  nombre: 'Tony Stark',
  codeName: 'ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark II', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//   console.log('nombre', personaje.nombre);
//   console.log('codeName', personaje.codeName);
//   console.log('vivo', personaje.vivo);
//   console.log('edad', personaje.edad);
//   console.log('coords', personaje.coords);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 18, trajes }) => {
  edad = edad || 0;

  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(Tony);
