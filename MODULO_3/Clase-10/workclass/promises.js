// Promesa
// Una promesa en JavaScript es un objeto que representa el resultado eventual de una operación asíncrona.
// Puede estar en uno de tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected).
// Puedes crear una nueva promesa utilizando el constructor Promise. Este constructor toma una función ejecutora con dos argumentos: resolve y reject.
// resolve se utiliza cuando la operación asíncrona se ha completado correctamente, y reject se utiliza cuando ha ocurrido un error.

const miPromesa = new Promise((resolve, reject) => {
    const todoOk = true;
    if (todoOk) {
        resolve({ user: 1 });
    } else {
        reject('Oops algo salio mal');
    }
});

// Las promesas poseen dos metodos: then y catch.
// El metodo then obtiene el resultado exitoso de la promesa.
// El metodo catch captura el error en caso de que la promesa tenga un resultado fallido.
// El metodo finally siempre se ejecutará pase lo que pase, si la promesa es resuelta o si es fallida.

/*miPromesa
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('Finally'));*/


// Encadenamiento de promessas:
// Una de las características más poderosas de las promesas es la capacidad de encadenar múltiples operaciones asíncronas de forma secuencial.

/*miPromesa
    .then(resultado => {
        console.log('Resultado promesa 1: ', resultado);
        return 1;
    })
    .then(resultado => {
        console.log('Resultado promesa 2: ', resultado);
        return true;
    })
    .then(resultado => {
        console.log('Resultado promesa 3: ', resultado);
        return ['Tercer resultado'];
    })
    .then(resultado => console.log('Resultado promesa 4: ', resultado))
    .catch((err) => console.log(err))
    .finally(() => console.log('Se acabo'));*/

// RETO
// Hacer un programa usando promesas en donde una madre pueda verificar si su hijo se porta bien o mal.
// Si se porta bien le regala un telefono celular. Si no se porta bien, le cancela el regalo y lo castiga.
function verificarComportamiento(comportamientoDeHijo) {
    return new Promise((resolve, reject)=> {
        if(comportamientoDeHijo){
          resolve(`Te dare un celular`)
        }else{
          reject('Te mereces un castigo y no hay regalo')
        }
    });
}
  
/*verificarComportamiento(false)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(()=> console.log(`No importa el resultado te apoyare siempre`));*/


// Manejo de multiples promesas

// Promise.all
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto,
// o se rechaza tan pronto como una de las promesas en el array es rechazada.
// El valor resuelto es un array con los valores de resolución de cada una de las promesas en el mismo orden que el array original.
// Respeta el orden de llegada de las promesas
const promesa1 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
const promesa2 = Promise.resolve('Promesa 2');
const promesa3 = Promise.resolve({ a: 1 }); // Si hay una promesa que se rechaza, esta tendra prioridad sobre las demas y sera retornada
const promesa4 = Promise.resolve(true);

// Resultado si todos son resolve: [ 1, 'Promesa 2', { a: 1 }, true ]
// Resultado si hay tan solo un reject: { a: 1 }
Promise.all([ promesa1, promesa2, promesa3, promesa4 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));


// Promise.allSettled
// Similar a Promise.all, pero espera a que todas las promesas se resuelvan o se rechacen, sin importar su resultado.
// Retorna una promesa que se resuelve con un array de objetos que describen el resultado de cada promesa.
// Respeta el orden de llegada de las promesas
const promesaSettled1 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
const promesaSettled2 = Promise.resolve('Oops fallo algo en el servidor');
const promesaSettled3 = Promise.resolve(8);

/* Resultado:
    [
    { status: 'fulfilled', value: 1 },
    { status: 'rejected', reason: 'Oops fallo algo en el servidor' },
    { status: 'fulfilled', value: 8 }
    ]
*/
Promise.allSettled([ promesaSettled1, promesaSettled2, promesaSettled3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));


// Promise.race
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas en el array se resuelve o se rechaza,
// con el valor o la razón de resolución de esa primera promesa.
// No respeta el orden de llegada.
// No prioriza los resultados exitosos, le da igual la primera que llegue la toma.
const promesaRace1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 resuelta'), 2000));
const promesaRace2 = new Promise((_, reject) => setTimeout(() => reject('Promesa 2 rechazada'), 1000));
const promesaRace3 = Promise.reject('Promesa 3 resuelta'); // Esta promesa gano la carrera y es la promesa que se muestra en el resultado final

Promise.race([ promesaRace1, promesaRace2, promesaRace3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));


// Promise.any
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve tan pronto como una de las promesas en el array se resuelve.
// Si todas las promesas son rechazadas, la promesa devuelta es rechazada con un AggregateError que contiene todos los errores de rechazo.
// No respeta el orden de llegada siempre y cuando no haya promesas rechazadas.
// Prioriza los resultados exitosos
const promesaAny1 = Promise.reject('Promise 1 rejected');
const promesaAny2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 5000));
const promesaAny3 = Promise.reject('Promise 3 rejected');

Promise.any([ promesaAny1, promesaAny2, promesaAny3 ])
    .then(res => console.log(res))
    .catch(err => console.log('Error: ', err));