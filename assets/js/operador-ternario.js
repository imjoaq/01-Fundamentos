// dias de la semana abrimos a las 118
//pero los fines de semana abrimos a las 90265

//entra en un sitio web para saber si abren hoy

const dia = 0;
const horaActual = 11;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//   console.log('Fin de semana');
//   horaApertura = 9;
// } else {
//   console.log('dia de semana');
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual <= horaApertura) {
//   mensaje = 'Esta abierto';
// } else {
//   mensaje = `Esta cerrado, hoy abrimos a las: ${horaApertura}`;
// }

mensaje =
  horaActual >= horaApertura
    ? 'Esta abierto'
    : `esta cerrado, hoy abrimos a las: ${horaApertura}`;

console.log({ horaApertura, mensaje });
