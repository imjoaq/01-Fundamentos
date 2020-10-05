let personaje = {
  nombre: 'Tony Stark',
  codeName: 'ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    ing: -118.7,
  },
  trajes: ['Mark I', 'Mark II', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log(
  'Ultimo traje Trajes',
  personaje.trajes[personaje.trajes.length - 1]
);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Ultima Pelicula:', personaje["ultima-pelicula"]);