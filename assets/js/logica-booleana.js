const regresaTrue = () => {
  console.log('Regresa True');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
};

console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); //True

console.warn('And'); // true si todas las condiciones son verdaderas
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false

console.log('=======');
console.log(regresaFalse() && regresaTrue()); //False
console.log(regresaTrue() && regresaFalse()); //False

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.warn('OR'); // true
console.log(true || false); //true
console.log(false || false); //false

console.log(regresaTrue() || regresaFalse());

console.log('ASIGNACIONES');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola mundo' && 150; // true
const a2 = 'hola' && 'mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';

console.log({ a1, a2, a3, a4 });
