# NodeJS II

Ya vimos los conceptos teoricos iniciales de NodeJS, miramos su instalación y también tenemos el gestor de paquetes npm, sin duda ya estamos listos para trabajar con librerías muy interesantes del backend, sin embargo, miremos antes algunos de los módulos mas utilizados propios de NodeJS, estos son implementados directamente en NodeJS sin necesidad de instalar librerías o Frameworks y son claves en la gestión de aplicativos Backend.

Miremos entonces los `Buffers y Streams` y la gestión de archivos con NodeJS.

## Buffers y Streams

El manejo de `Buffers` y `Streams` en NodeJS es un concepto basico del desarrollo backend que todo desarrolador tanto Frontend como Backend web debería tener muy claro, repasemos cada concepto y luego miremos ejemplos de sus implementaciones en NodeJS.

Un `Stream` es como lo dice su traducción literal `transmisión`, un `Stream` representa una transferencia de contenido con cierto peso asociado, puede ser por ejemplo un archivo de texto, imagenes, video, musica, literalmente cualquier dato se puede representar mediante un `Stream` y representa ese proceso de transmisión.

Los `Stream` se apoyan en la transferencia de información en los `Buffers`, estos tienen como objetivo hacer esta transferencia de información mas segura y controlada, es decir, si se habla de transferencia de datos el `Stream` representa el canal que hace posible esta transferencia pero los `Buffers` son lo que realmente se mueve por el Stream y hace posible la transferencia de datos.

Miremos la siguiente imagen de ejemplo.

![](./resources/Buffers.png)

Como vemos en azul, el `Stream` es el canal por el que se hace posible la transferencia de datos, luego para este caso estamos simulando la transferencia de la frase `This is some data`, como vemos un dato sería una letra, por tanto un `Buffer` que por definición es una colección de datos que viajan a traves de un `Stream`, entonces un conjunto de letras es un `Buffer`, como vemos lo que hacen los Buffers es descomponer los sets de datos transferidos en varios mas pequeños lo que hace de nuestras transferencias de datos muchisimo mas seguras y estables, también los Buffers pueden cumplir objetivos en la seguridad en la transferencia de datos y en general son personalizables en base a nuestras necesidades en transferencia de datos.

Miremos algunos ejemplo practicos de la implementación de Buffers en transferencia de datos para entender un poco mas su utilidad.

Imaginemos que queremos ver una pelicula en Netflix, una pelicula en una calidad tan solo aceptable y con una duración corta en promedio como lo que podrían ser 60 minutos podría llegar a pesar tranquilamente mas alla de las 10GB. Esto es un peso muy considerable, ahora imaginemonos que nos sentamos en un espacio de 15 minutos de descanso para continuar una pelicula que recién nos empezamos en algún momento y solo habíamos visto 10 minutos, entonces, si no existieran los Buffers, tendríamos que esperar a que nuestro dispositivo descargue esas 10GB y para poder visualizar nuestra información, porque 10GB son mucho espacio en almacenamiento para cualquier dispositivo, imaginemos tener tan solo 20 peliculas de Netflix en nuestros discos duros, se llenarían por completo, en adición, solo podemos ver la pelicula 15 minutos por lo que nos quedará faltando mas de la mitad, la proxima vez que queramos ver la pelicula tendremos que esperar otra vez que descargue completa para poder verla.

Esto en la realidad no sucede así, en la realidad cuando nos sentamos a ver cualquier serie o pelicula nuestro dispositivo no descarga completamente la pelicula o serie, sino que mediante un Stream que abre con Netflix va descargando Buffers o sea secciones de la pelicula pequeñas y va solicitando más conforme avanzamos en la visualización de la pelicula o serie, de esta manera tanto el canal de Netflix no se satura todo el tiempo pidiendo información como nuestro dispositivo tampoco se satura de recibirla, solo la solicita conforme la necesita y de esta manera los canales activamente contienen muy poca data lo que los hace mucho mas eficientes.

Esto no solo pasa con las peliculas sino por ejemplo videos de Youtube o cuando hacemos Streaming de musica por ejemplo con Spotify y no solo se ven aplicados Buffers en la eficiencia en transferencia de información sino en muchisimos mas campos como en seguridad pero no profundizaremos tanto en este módulo, si queremos leer mas sobre el tema podemos hacer clic [aquí](https://medium.com/developers-arena/streams-and-buffers-in-nodejs-30ff53edd50f)

Miremos la implementación de Buffers y Streamings que se da en NodeJS.

En NodeJS existen cuatro tipos diferentes de `Streams`

- Streams de lectura -> Son streams para lectura de información
- Streams de escritura -> Son streams para la escritura de datos
- Streams Duplex -> Son streams que sirven tanto para lectura como para escritura de datos
- Streams de transformación -> Son streams Duplex que adicionalmente se ven afectados por una transformación en el Stream como por ejemplo compresión.

Como mencionamos, un `Stream` se basa en la transferencia de `Buffers`, por tanto se hace muy necesario su manejo en relación, de hecho en el objeto `Stream` podemos establecer la configuración para el manejo de `Buffers` dentro del mismo utilizando las siguientes propiedades por ejemplo.

- `highWatermark` -> Sirve para indicar el tamaño en bytes de los `Buffers`
- `objectMode` -> Sirve para indicar el tipo del dato en memoria de Node para el Buffer

Existen muchas mas propiedades para la configuración del `Stream` pero no serán objeto de este módulo por su profudidad.

Los Streams de NodeJS extienden de la clase `EventEmitter` por tanto tienen la capacidad de emitir eventos y por tanto tendremos la posibilidad de escucharlos también usando la función `stream.on()` para definir que evento queremos escuchar.

Miremos entonces ejemplos de la implementación de Streams en NodeJS.

### Streams de Lectura

```js
import { createReadStream, ReadStream } from "fs";

var readStream: ReadStream = createReadStream("./data.txt");

readStream.on("data", (chunk) => {
  console.log("---------------------------------");
  console.log(chunk);
  console.log("---------------------------------");
});

readStream.on("open", () => {
  console.log("Stream opened...");
});

readStream.on("end", () => {
  console.log("Stream Closed...");
});
```

Como vemos en este ejercicio, hacemos uso de los eventos del Stream de lectura que hemos creado, `open` es un que se ejecuta cuando el Stream recién se abre, `end` es un evento que se emite cuando finaliza la lectura y se cierra el `Stream` y `data` se emite cuando se obtiene un nuevo set de datos, es decir, cuando se transfiere un nuevo `Buffer`.

Cuando ejecutamos este código haciendo uso del comando para ejecutar scripts de NodeJS `node {nombre del archivo}` veremos la siguiente salida

![](./resources/ReadStream.png)

Eso que vemos como `<Buffer>` es la representación de un Buffer, estos los podemos transformar a datos utilizando la función `Buffer.from()` como lo miraremos mas adelante.

La lectura de un Stream de lectura puede ser pausada y resumida con las funciones `pause()` y `resume()`, como resultado de `pause()` el evento `data` no será emitido hasta que se utilice la `resume()`.

Existen dos tipos de streams de lectura.

- `Stream fluido` Es un stream que constantemente pasa los sets de datos que pueden ser escuchados mediante el evento `data`
- `Stream no fluido` Es un stream que no envía la información automaticamente, este almacena la información en Buffers que necesitamos explicitamente llamar usando la función `read()`

El código anterior es un ejemplo de `Stream fluido`, el siguiente es el ejemplo de uno `No fluido`.

```js
import { createReadStream, ReadStream } from "fs";

var readStream: ReadStream = createReadStream("./data.txt");

setTimeout(() => {
  const data = readStream.read(10);
  console.log(data);
}, 10);
```

De esta manera cada 10 mili segundos leemos 10 bytes del Buffer utilizando la función `read()`, cabe destacar que la proxima vez pese a ser llamado con el mismo argumento `10` no leerá los 10 primeros bytes otra vez pues el Buffer luego de que información ha sido leida este la elimina para evitar repeticiones de información.

Como habíamos mencionado con la función `Buffer.from()` podemos convertir Buffers al tipo de dato que queramos, miremos por ejemplo como imprimir un set de información en lenguaje humano haciendo uso de esta función.

```js
import { createReadStream } from "fs";

var readStream = createReadStream("./data.txt");

readStream.on("data", (chunk) => {
  console.log("---------------------------------");
  //Convertimos el Buffer a String
  console.log(chunk.toString());
  console.log("---------------------------------");
});

readStream.on("open", () => {
  console.log("Stream opened...");
});

readStream.on("end", () => {
  console.log("Stream Closed...");
});
```

De esta manera pasamos un Buffer a texto y también podemos generar un Buffer con cualquier tipo de datos, miremos por ejemplo una frase transformada en Buffer.

```js
const dataToBuffer = Buffer.from("Hello World");
console.log(dataToBuffer);
```

El resultado impreso en consola del log del Buffer del texto `Hello World` es `<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>`.

Este es el uso más basico y fundamental de los Streams y los Buffers. Miremos otra herramienta fundamental en NodeJS como es la del manejo de archivos.

## Manejo de archivos

Para el manejo de archivos del sistema en NodeJS contamos con la librería `build-in` de NodeJS `fs`, esta que de hecho utilizamos en los ejercicios pasados de Streams y Buffers nos sirve para gestionar todo tipo de operaciones con archivos del sistema, de hecho es la que utilizamos en módulos iniciales en ejercicios de este tipo.

Esta librería nos permite acceder a herramientas como.

- Lectura de archivos
- Creación de archivos
- Actualización de archivos
- Eliminar archivos
- Renombrar archivos

Lo implementamos en nuestros modulos utilizando el correspondiente `require` o `import` a 'fs', miremos algúnos de sus metodos mas utilizados.

### Lectura de archivos

Para la lectura de archivos utilizamos una que bien debemos conocer ya, pues la utilizamos en varias tareas de módulos pasados. `fs.readFile()`

```js
import fs from "fs";

fs.readFile("./data.txt", (err, data) => {
  console.log(data);
});
```

### Creación de archivos

Para crear archivos utilizamos 3 funciones

- `fs.appendFile()` Le agregamos al archivo el contenido especificado, si el archivo no existe lo crea
- `fs.open()` Abre un archivo y mediante funciones podemos manipularlo
- `fs.writeFile()`

`appendFile()`

```js
fs.appendFile("./data.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
```

Al ejecutarse entonces, le agregará el texto "Hello content!" al archivo y en caso de no encontrarlo lo creará.

`open()`
Este toma un segundo parametro con 'w' para escritura, abre el archivo y si no existe lo crea.

```js
fs.open("newData.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
```

`writeFile()`

Este crea un archivo con el contenido dado, si el archivo ya existe lo sobreescribe, es decir, reemplaza todo el contenido previo por el nuevo indicado.

```js
fs.writeFile("thirdData.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
```

### Actualización

Para la actualización de archivos utilizamos los vistos metodos `writeFile()` o `appendFile()`

### Eliminación de archivos

Para eliminar un archivo utilizamos la función `fs.unlink()`, este elimina el archivo en la ruta dada.

```js
fs.unlink("deletedData.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
```

## Repaso de Promises y Async Await

Lo que vamos a ver de ahora en más será una aplicación de todo lo que hemos visto, como siempre, pero esta vez si que empezaremos a utilizar todo el tiempo `async-await` y promesas por tanto demos un repaso para recordarlo.

El modelo async, await se compone de dos palabras claves, la primera (`async`) se utiliza para definir funciones asincronas y de esta manera poder utilizar `await` que es solo permitida dentro de funciones asincronas.

El modelo `async-await` no es mas que un modelo basado en promesas para el manejo del asincronismo pero con un estilo para la gran mayoría de desarrolladores mucho más entendible y por tanto mucho mejor para los desarrollos, utilicemos el siguiente ejemplo de guía.

```js
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

## Final del módulo

Finalizamos el segundo módulo de NodeJS, en el que vimos elementos fundamentales de las adiciones de NodeJS a Javascript, en el siguiente seguiremos repasando módulos `build-in` de NodeJS que nos sirven para prestaciones back, miraremos el inicio de la construcción de APIs sobre servidores HTTP con NodeJS.
