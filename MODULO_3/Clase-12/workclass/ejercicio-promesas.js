const isLogged = true;

const seleccionesArr = [
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

const jugadoresArr = [
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
    setTimeout(() => {
        if (isLogged) {
            resolve(seleccionesArr);
        } else {
            reject('No estas logueado dentro de la app');
        }
    }, 2000);
  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    setTimeout(() => {
        const jugadores = jugadoresArr.filter(jugador => jugador.codigoPais === codigoPais);
        resolve(jugadores);
    }, 5000);
  });
}

/*
Tarea: Respuesta final
{
    'COL': {
        10: 'James Rodriguez',
        11: 'Luis Diaz',
        12: 'Richard Rios',
    },
    'ARG': {
        13: 'Leo Messi',
        14: 'Lautaro Martinez',
    },
}
*/

obtenerSelecciones()
    .then(selecciones => {
        const jugadoresPromises = selecciones.map(seleccion => obtenerJugadoresPorSeleccion(seleccion.codigoPais));
        return Promise.all(jugadoresPromises);
    })
    .then(jugadores => console.log(jugadores))
    .catch(err => console.log('Error: ', err));