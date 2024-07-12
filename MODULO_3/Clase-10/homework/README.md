# Tarea 9: Promises, then y catch

Hacer un programa que simule una peticion a un servidor, con delay de 2000 ms, donde se obtenga una informacion de selecciones de la Copa América. Si el usuario general de la aplicación esta logueado (isLogged) la promesa se resuelve con las selecciones (selecciones), si no, se rechaza con un mensaje diciendo "No estas logueado dentro de la app". Dentro de cada selección hay una propiedad código de país (code) que servirá para obtener la informacion de los jugadores de esa selección, simulando otra peticion tambien con delay de 5000 ms que se resolvera con todos los jugadores dentro de la lista jugadores.

Notas:
- Usar Promise.all para la segunda peticion fake, es decir la que obtiene los jugadores, una vez se resuelva la primera (dentro del then).
- La promesa de obtener jugadores debe recibir como parametro un código de país.

```javascript
const isLogged = true;

const selecciones = [
  {
    id: 1,
    nombre: 'Colombia',
    codigoPais: 'COL'
  },
  {
    id: 2,
    nombre: 'Argentina',
    codigoPais: 'ARG'
  },
  {
    id: 3,
    nombre: 'Uruguay',
    codigoPais: 'URU'
  },
  {
    id: 4,
    nombre: 'Brasil',
    codigoPais: 'BRA'
  },
];

const jugadores = [
  {
    id: 10,
    nombre: 'James',
    apellido: 'Rodriguez',
    codigoPais: 'COL'
  },
  {
    id: 11,
    nombre: 'Luis',
    apellido: 'Díaz',
    codigoPais: 'COL'
  },
  {
    id: 12,
    nombre: 'Richard',
    apellido: 'Ríos',
    codigoPais: 'COL'
  },
  {
    id: 13,
    nombre: 'Lionel',
    apellido: 'Messi',
    codigoPais: 'ARG'
  },
  {
    id: 14,
    nombre: 'Lautaro',
    apellido: 'Martínez',
    codigoPais: 'ARG'
  },
  {
    id: 15,
    nombre: 'Federico',
    apellido: 'Valverde',
    codigoPais: 'URU'
  },
  {
    id: 16,
    nombre: 'Darwin',
    apellido: 'Nuñez',
    codigoPais: 'URU'
  },
  {
    id: 17,
    nombre: 'Vinicius',
    apellido: 'Jr',
    codigoPais: 'BRA'
  },
  {
    id: 18,
    nombre: 'Rodrygo',
    apellido: 'Goes',
    codigoPais: 'BRA'
  },
];

function obtenerSelecciones() {
  return new Promise((resolve, reject) => {
    // ...aqui tu codigo
  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    // ...aqui tu codigo
  });
}

```