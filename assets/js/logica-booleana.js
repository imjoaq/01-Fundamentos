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
console.log( regresaFalse() && regresaTrue() ); //True