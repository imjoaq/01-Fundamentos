let personaje = {
  nombre: 'Tony Stark',
  codeName: 'ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    ing: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
};

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('No. Trajes', personaje.trajes[personaje.trajes.length - 3]); 
