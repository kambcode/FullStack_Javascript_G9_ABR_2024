# Conceptos de asincronismo

En este módulo vamos a ver herramientas para darle manejo al asincronismo de Javascript, a este concepto se le da uso con muchisima frecuencia y por tanto se hace de suma importancia el orden con el que lo trabajemos en nuestros códigos, por tanto vamos a ver un error muy común y todas las soluciones a dicho error que nos dieron las nuevas versiones de Javascript.

## Callback hell

Como lo vimos en el módulo pasado, la principal manera de imponerle a nuestro programa un orden de ejecutar tareas asincronicas que toman un tiempo es mediante callbacks, es decir, mediante callbacks es la manera mas común de agregarle asincronismo a nuestros desarrollos pero esto puede traernos ciertos problemas si no lo manejamos de una manera adecuada, estos problemas en general llevan a nuestro código a caer al `callback hell`. Seguramente si has leído sobre callbacks has escuchado hablar sobre este, se trata de cuando no le damos un buen manejo o estructura a nuestro código, las instrucciones asincronas manejadas mediante callbacks pueden llevarnos a algo como lo siguiente.

Imaginemos que tenemos que calcular las ventas mensuales durante el ultimo trimestre de todos nuestros vendedores. Nuestro código usando callbacks podría terminar viendose así.

```
getSalesTrimestrePF: function (user,trimestre,year)
  {
    return new Promise(function(cb)
      {
        var emptyData = { auto: 0, salud: 0, vida: 0, hogar: 0 };
        var months = DashboardService.getMonthsTrimestre(trimestre);
        DashboardService.getSalesMonthPF(user,months[0],year,
          function (err, sales_month_1)
          {
            if(err == undefined)
              DashboardService.getSalesMonthPF(user, months[1],year,
                function(err, sales_month2)
                {
                  if(err == undefined)
                    DashboardService.getSalesMonthPF(user, months[2],year,
                      function(err, sales_month3)
                      {
                        if(err == undefined){
                          var totals = { auto: (sales_month_1.auto+sales_month2.auto+sales_month3.auto),
                                            salud: (sales_month_1.salud+sales_month2.salud+sales_month3.salud),
                                            vida: (sales_month_1.vida+sales_month2.vida+sales_month3.vida),
                                            hogar: (sales_month_1.hogar+sales_month2.hogar+sales_month3.hogar) };
                          cb({months:[sales_month_1, sales_month2, sales_month3], totals: totals});

                        }
                        else {
                          throw err;
                        }
                      }
                    );
                  else
                    throw err;
                }
              );
            else
              throw err;
          }
        );
      }
    );

  }
```

A esta estructura que vemos, se le llama de muchisimas maneras distintas, pyramid of doom, hadouken. Este es el resultado del uso de callbacks sin precauciones, estas precauciones que podemos tomar al usar callbacks se resumen en `refactor` que le podemos hacer a nuestro código.

> `Refactor` se refiere a cuando hacemos un analisis a nuestro desarrollo y haciendo uso de las herramientas que nos brinda el lenguaje de programación junto con buenas practicas logramos organizar nuestro código de manera que se facilite su `lectura`, este es un criterio de calidad FUNDAMENTAL en el desarrollo de software.

Cuando desarrollamos más del 80% del tiempo estamos leyendo código, ya sea nuestro o creado por otra persona puesto que necesitamos hacerle una modificación o extensión, esto hace que el como visualizamos el código sea clave, para facilitarnos el entendimiento de este y hacer mas eficiente nuestra tarea sobre el. Por tanto, el `refactor` pasa a ser una practica obligatoria en nuestros códigos con el fin de generar desarrollos lo mas `mantenibles` y `escalables` posibles.

> Un código `mantenible` es cuando un desarrollo se entiende facilmente y su mantenimiento como corrección de bugs se facilita enormemente. Por el lado de la `escalabilidad` de un código la mencionamos en cuanto al `refactor` cuando nuestro código se entiende de manera amena lo que facilita la implementación de nuevas funcionalidades en base al código existente.

Como vemos entonces, el refactor es fundamental en el flujo del desarrollo de software, por esto mismo el callback hell es un problema enorme para nuestros desarrollos, porque entorpecen la legibilidad de nuestro código y hacen sumamente dificil predecir cual será su funcionamiento para corregir bugs o para adicionar funcionalidades.

La solución entonces para el callback hell es basicamente mejorar nuestro desarrollo, en cuanto a por ejemplo nombrar las funciones de mejor manera, definir los callbacks antes de usarlos y simplemente implementarlos en el flujo de manera que la visualización sea mas amena pero finalmente esto nos va a tomar un tiempo importante que podríamos utilizar en otros desarrollos.

Pensando en esto Javascript facilita mas herramientas para manejar el asincronismo las cuales veremos a continuación.

## Promesas

Las promesas son objetos de Javascript los cuales representan un valor resultante de una operación asincronica, este valor puede tomar dos tipos de valores, uno que representa una ejecución completa de nuestro procedimiento asincrono con resultado satisfactorio o como lo veremos mas adelante `Resolve` o un valor que representa un error durante la ejecución el cual no logró la ejecución de dicho procedimiento satisfactoriamente o `Reject`.

Esencialmente, una promesa es un objeto retornado al cual le adicionamos callbacks en lugar de pasarselos a la función directamente.

Vamos a mirarlo y hacerlo mas claro con un ejemplo grafico.

Imaginemos el caso donde tenemos una función llamada `crearArchivoAudioAsinc` que vamos a imaginarnos genera un archivo de audio y dado el resultado retorna un callback, entonces, tenemos que crear un callback para el flujo exitoso y otro para un caso donde algo falló y nuestro flujo no se completó de la manera deseada. Se vería algo así.

```

function audioCreadoSatisfactoriamente(resultado) {
  console.log(`El audio resultado está en el siguiente URL: ${resultado}`)
}

function errorAlCrearAudio(error) {
  console.log(`Error generando el audio: ${error}`)
}

crearArchivoAudioAsinc(configuracion, audioCreadoSatisfactoriamente, errorAlCrearAudio);

```

Usando promesas, podríamos re escribir está función y hacerla lucir de la siguiente manera.

```
crearArchivoAudioAsinc(configuracion).then(audioCreadoSatisfactoriamente, errorAlCrearAudio)
```

Miremos ahora si antes de avanzar, los conceptos que roden las Promesas.

Una promesa es un valor que no se conoce necesariamente cuando este es creado, permite mediante manejadores ejecutar tareas ante un eventual fallo o resultado satisfactorio de un proceso asincrono, esto permite a las funciones asincronas retornar valores en lugar de funciones.

Una promesa puede tener tres estados:

- `Pending | Pendiente` Representa el estado inicial de una promesa, este es el estado en el que se encuentra cuando ni se ha cumplido ni se ha rechazado
- `Fulfilled | Cumplida` Representa el estado cuando la operación asincrona ha sido completada satisfactoriamente
- `Rejected | Rechazada` Significa que la operación falló.

El flujo normal o basico es que una promesa pase de `pending` a `fulfilled` con un valor a retornar o en caso de un eventual error que pase al estado de `rejected` con el error por supuesto para su manejo. Miremos el siguiente grafico donde se ejemplifica más el flujo de las promesas.

![Grafico promesas](./resources/GraficoPromesas.png)

Como notamos es un flujo que puede repetirse una y otra vez cuantas veces sea necesario para la tarea a cumplir.

Miremos un ejemplo de como funciona una implementación de promesas.

```
const misDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { nombre: "Sultano", ocupacion: "Artista" },
            { nombre: "Mendana", ocupacion: "Ingeniera" },
        ]);
    }, 1000);
});

misDatos.then((datos) => {
    console.log(datos);
});
```

En este sencillo ejemplo tenemos una promesa la cual es llamada `misDatos`, esta promesa contiene luego de un segundo que simula el tiempo en obtener datos de otro origen el valor de estos datos, utilizando un `then` imprimimos los datos una vez los tenemos, es decir, una vez la promesa ha sido `resuelta`.

La implementación en general de esta convención tiene varias ventajas de las cuales miraremos a continuación.

- Podemos utilizar muchos callbacks consecutivos usando `then()` muchas veces, serán invocados en el orden indicado.
- Nos aseguraremos de que la ejecución del callback sea siempre despues del ciclo actual de ejecución del event loop.
- Estos callbacks van a ser invocados incluso si fueron agregados luego de la eventual falla o funcionamiento correcto de la promesa

Una de las herramientas mas interesantes de usar promesas es el `chaining` o como su traducción lo indica `encadenado`

`Encadenado`

Una practica común es que requiramos de ejecutar varias operaciones asincronas una tras de otra, donde cada operación depende de la anterior, esto lo podemos solucionar con el encadenado de promesas.

La magia está detras de que un `then()` retorna a su vez también una promesa diferente de la original, entonces, si un callback es una operación asincronica esta también retornara una nueva promesa la cual podrá ser utilizada para una operación consecuente.

Miremos el siguiente ejemplo.

```
const promesa2 = hazAlgo().then(exito, fallo);
```

Esta segunda promesa representa no solo la completación de la ejecución de `hazAlgo()` sino también de `exito()` o `fallo()` según haya sido el flujo, así entonces podemos encadenar mas callbacks a `promesa2` los cuales serán ejecutados en el orden que sean definidos mediante el uso de cadenas de `then()`

Miremos el siguiente ejemplo de como lo haríamos con un flujo de trabajo mediante callbacks normales.

```js
hazAlgo(function (resultado) {
  hazAlgoMas(
    resultado,
    function (nuevoResultado) {
      HazUnaTercerCosa(
        nuevoResultado,
        function (resultadoFinal) {
          console.log(`Obtuvimos el resultado final: ${resultadoFinal}`);
        },
        errorCallback
      );
    },
    errorCallback
  );
}, errorCallback);
```

Que tendría su contraparte mediante promesas representada de la siguiente manera.

```js
hazAlgo()
  .then(function (resultado) {
    return hazAlgoMas(resultado);
  })
  .then(function (nuevoResultado) {
    return hazUnaTercerCosa(nuevoResultado);
  })
  .then(function (resultadoFinal) {
    console.log(`Obtuvimos el resultado final: ${resultadoFinal}`);
  })
  .catch(errorCallback);
```

En este caso estamos cumpliendo el mismo funcionamiento, pero en el primer caso usando callbacks anidados que lo que generan es la temida `piramyd of doom`, `callback hell`, `hadouken` o como le queramos llamar, así entonces las promesas no solo representan una nueva manera de trabajar el asincronismo de Javascript sino una enorme mejora en cuanto al orden y representación que le damos a estos flujos de manera que mediante buenas practicas evitemos dichos dolores de cabeza para todo nuestro equipo de desarrollo.

Que no se escape el nuevo concepto que aparece en este ejemplo `catch()` que es un atajo a `then(null, errorCallback)` es la manera que nos presta esta herramienta para el manejo de errores que miremos mas adelante a detenimiento.

> Es fundamental siempre retornar resultados, de otra manera los callbacks no van a tener manera de seguirle la traza a las promesas y la promesa quedará `flotando` como se le llama a cuando una promesa nunca retorna.

Por ejemplo:

```
hazAlgo()
  .then((url) => {
    // Aquí nos olvidamos de retornar el resultado de consultarData()
    consultarData(url);
  })
  .then((result) => {
    // Resultado no estará definido porque nunca lo retornamos, no hay manera de saber ni siquiera si el flujo se ejecutó correctamente
  });
```

De hecho, si tenemos varios `then` anidados y uno de estos no retorna promesa podrían ejecutarse en desorden y sin tener valores necesarios para su ejecución. En resumidas cuentas, siempre retornemos la promesa en cada `then`.

`Encadenando luego de catch`

Luego de `catch` que representa el manejo que se le da a un error también podemos encadenar mas `then`, lo que indicará estos siguientes del `catch` es que se ejecutarán independiente de cual fue el flujo de nuestra promesa. Ejemplo.

```
new Promise((resolve, reject) => {
  console.log("Inicial");

  resolve();
})
  .then(() => {
    throw new Error("Algo falló");

    console.log("Haz esto");
  })
  .catch(() => {
    console.error("Haz esto en caso de error");
  })
  .then(() => {
    console.log("Haz esto, no importa lo que haya pasado antes");
  });

```

### Promesas concurrentes

La clase `Promise` ofrece cuatro metodos estaticos para facilitar las tareas asincronas `concurrentes`, miremoslas

- `Promise.all()` Se resuelve solo cuando todas las promesas son resultas, se rechaza si cualquiera de las promesas es rechazada, un ejemplo bastante claro puede ser cuando utilizamos metodos como `.map()`, podemos hacer que este retorne promesas y esperar la ejecución de todas haciendo uso de `Promise.all()`
- `Promise.allSettled()` Se resuelve cuando todas las promesas son terminadas, sean rechazadas o resueltas.
- `Promise.any()` Se resuelve cuando cualquiera de las promesas se resuelve, rechaza cuando TODAS las promesas son rechazadas
- `Promise.race()` Se termina cuando cualquiera de las promesas termina, es decir, cuando cualquiera se resuelve, se resuelve y cuando cualquiera es rechazada se rechaza.

Todos estos metodos utilizan un iterable de promesas y devuelven una nueva promesa en base a todas estas anteriores.

### Propagación de errores

Por supuesto como lo vimos en el modulo de Callbacks el manejo de errores es fundamental, para este caso de manejo asincronico ya vimos cual es la herramienta de la que nos valemos para implementar manejo de errores, `catch`, esta herramienta nos facilita mucho a nivel visual y en general de orden el manejo de errores de nuestros flujos asincronicos sobre todo si conllevan varios pasos. Miremos un ejemplo.

```
hazAlgo()
  .then((resultado) => hazAlgoMas(resultado))
  .then((nuevoResultado) => HazUnaTercerCosa(nuevoResultado))
  .then((resultadoFinal) => console.log(`Tenemos el resultado final ${resultadoFinal}`))
  .catch(manejarError);
```

> En este ejemplo se visualiza nuevamente los casos de uso de las `arrow functions` las cuales nos sirven como atajo para la definición de `nameless` functions como lo vimos en el módulo donde aprendimos a declarar funciones.

Si se presenta un error durante el flujo de tareas asincronicas el programa va a buscar nuestro manejador `catch` y va a ejecutar la función definida con el error, esto visualizado como si se tratase de un código sincrono se vería así.

```
try {
  const resultado = hazAlgo();
  const nuevoResultado = hazAlgoMas(resultado);
  const resultadoFinal = HazUnaTercerCosa(nuevoResultado);
  console.log(`Tenemos el resultado final ${resultadoFinal}`);
} catch (error) {
  manejarError(error);
}
```

Este es el metodo que nos prestan las promesas para gestionar los errores, bastante mas intuituvo y facil de usar que el de callbacks.

## Async Await

Así nos hacemos lugar hasta el concepto quiza mas utilizado hoy día y que sin duda cada vez mas son las tecnologías que migran sus funcionalidades a este modelo, el modelo `async-await`.

El modelo async, await se compone de dos palabras claves, la primera (`async`) se utiliza para definir funciones asincronas y de esta manera poder utilizar `await` que es solo permitida dentro de funciones asincronas.

El modelo `async-await` no es mas que un modelo basado en promesas para el manejo del asincronismo pero con un estilo para la gran mayoría de desarrolladores mucho más entendible y por tanto mucho mejor para los desarrollos, utilicemos el siguiente ejemplo de guía.

```
function cargarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { nombre: "Sultano", ocupacion: "Artista" },
                { nombre: "Mendana", ocupacion: "Ingeniera" },
            ]);
        }, 2500);
    });
}

async function llamadaAsincrona() {
    console.log("Consultando base de datos por datos");
    const datos = await cargarDatos();
    console.log(datos);
}

llamadaAsincrona();
```

En el ejemplo visualizamos como declaramos la función con el precedesor de `async` denotando que la función es asincrona, luego dentro de esta podemos hacer uso de la keyword `await` de manera que el flujo se detenga hasta que haya finalizado la ejecución de la función cargarDatos, es decir, hasta que se llama `terminado` la resolución de la promesa, sea que sea `rechazada` o que sea `resuelta` este await lo que hace es darle prioridad a la ejecución de dicha tarea.

Las funciones `async` retornan una promesa la cual a su vez puede ser utilizada para hacer encandenamiento de la misma manera como lo haciamos con la otra notación de `then()` y `catch()` para el manejo de promesas.

### Manejo de Errores

Por supuesto, como las promesas con `then` y `catch` o los callbacks, las promesas mediante `async-await` también tienen su manera de manejar los errores, esta se remonta a la manera mas sencilla e inicial que aprendimos sobre manejo de errores, el `try-catch`, miremos un ejemplo.

```
async function escribirSobreBaseDeDatos(registros) {
    try {
        const respuestaDatabase = await modificarRegistros(registros)
        if(respuestaDatabase === 'ERROR'){
          await manejarErrorDatabase();
        }else{
          return await enviarInformacion(respuestaDatabase)
        }
    } catch (err) {
        console.error(err);
        return err;
    }
}
```

Mirando el ejemplo anterior, estamos declarando una función la cual se encarga contener la funcionalidad de escritura sobre una base de datos, para este ejemplo dependiendo de la respuesta de la base de datos ejecutamos un flujo u otro, pero para cualquier caso que se presente un error no manejado por ninguna de las funciones llamadas tenemos nuestro `catch` el cual va a obtener todos los errores no manejados y va a en este caso imprimirlos y retornarlos. Este es el modelo de manejo de errores que nos presta `async-await` bastante manejable y facil de entender.

Ya con estos conceptos claros se abren las puertas a un sin fin de maneras de implementar estos conocimientos a nuestros proyectos, revisemos un ejemplo con la escritura de un archivo que nos permita ver mas claramente el comportamiento.

En este ejemplo vamos a utilizar el módulo de sistema de archivos de nodejs FS, para el ejemplo vamos a usar como referencia un texto lorem ampliamente usado para contenido demostrativos.

El módulo de sistema de archivos FS, tiene multiples metodos para la creación de un archivo que vas poder explorar mas a fondo mientras resuelves las tareas del módulo, por ahora para el ejemplo vamos a usar el método writeFile, que recibe como parámetos la ruta del archivo y la data a incluir en él mismo, a continuación vemos el ejemlo de codigo a implementar:

```
const { writeFile } = require('fs/promises');
async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
    return `Wrote data to ${fileName}`;
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}
writeToFile('friends.txt', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
```

Como vemos, una vez tenemos instalado node en nuestro equipo podemos hacer uso por defecto del modulo del sistema de archivos, en el ejemplo usamos writeFile dentro de una función asincrona que definimos nosotros, a esta función le pasamos la ubicación del archivo y el contenido que queremos que tenga el mismo, finalmente imprimimos los datos y los retornamos para si acaso son utiles mas adelante. En este caso la respuesta del endpoint fue la siguiente:

```
Wrote data to friends.txt
```

Este entonces, es un ejemplo practico muy basico sobre como implementamos el asincronismo en nuestras aplicaciones para crear archivos y agregarles contenido y solo es una de las infinidades de funcionalidades del asincronismo en Javascript.

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `callback hell`, `promesas` y vimos los elementos finales sobre el manejo de la `asincronia mediante promesas`, notamos como es muy importante entender de donde viene el manejo del asincronismo de Javascript y todas las implementaciones que se han dado con el fin de facilitar los desarrollos, por supuesto también destacar la importancia siempre latente del correcto manejo de errores. Ahora si que si estamos capacitados para dar pasos de gigante en los temas que veremos a continuación.
