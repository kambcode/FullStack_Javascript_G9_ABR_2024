# Fundamentos de operadores y switch case

Los operadores de asignación son atajos para la asignación de valores, es decir, son maneras resumidas de modificar el valor contenido por una variable de manera que sea mucho mas facil de visualizar el código, es mucho mas claro si lo miramos con algunos ejemplo y miramos por supuesto los operadores mas comunes

- `=` Asignación, nos sirve para asignar valores a variables
- `+=` Le suma a la variable el valor indicado
- `-=` Le resta a la variable el valor indicado
- `*=` Le multiplica a la variable el valor indicado
- `/=` Le divide a la variable el valor indicado

```
let suma = 3;
suma += 2;
console.log(suma) // 5
let resta = 6;
resta -= 4;
console.log(resta) // 2
let multiplica = 3;
multiplica *= 2;
console.log(multiplica) // 6
let divide = 6;
divide /= 2;
console.log(divide) // 3
```

Como vemos cada que modificamos los valores de las variables no tenemos que colocar el = luego el nombre de nuestra variable otra vez y luego la operación que le queremos aplicar sino que directamente podemos indicar que operación vamos a hacer sobre el valor ya existente.

> Existen muchos mas operadores mas complejos para funciones mas especificas y claro, menos frecuentes. Estos que revisamos son los mas utilizados en el flujo del desarrollo. Lee más sobre estos operadores de asignación [**aquí**](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Operadores ternarios

El operador ternario lo podemos entender como una estructura compacta para hacer condicionales. Consiste en una expresión que se evaluará y, dependiendo de si dicha evaluación fue positiva o negativa devolverá una u otra cosa.

Su sintaxis es la siguiente:

```
expresión_condicional ? expresion1 : expresion2;
```

La "expresion_condicional" será la que se evalue, positiva o negativamente. "expresion1" se ejecutará en caso que sea positiva y "expresion2" se ejecutará si era negativa. Adicionalmente, como resultado de la ejecución del operador ternario, se retornará aquello que devuelva la expresión finalmente ejecutada (la 1 o la 2).

Este operador condicional se conoce como ternario porque tiene tres operadores, tanto la expresión condicional a evaluar como dos expresiones a ejecutar para el caso positivo o el negativo.

Veamos un ejemplo de uso:

```
(x < 1000) ? x : 1000;
```

Ese código entregará el valor de x si la variable x era un número menor de 1000. En caso contrario (x no era menor de 1000) devolverá 1000.

Como esta sentencia termina devolviendo el valor resultado de una expresión u otra, es común que se use junto con una sentencia de asignación.

```
var valor_x_limitado_a_1000 = (x < 1000) ? x : 1000;
```

## Valores Truthy y Falsy

Este es el alma de este módulo, es uno de los elementos principales de Javascript y de cualquier lenguaje de programación y es de donde nos apoyamos para el control de flujo, este concepto hace referencia a cuando una expresión es verdadera y cuando falsa, podremos utilizar este concepto para controlar el flujo de nuestro código como ya lo miraremos. Javascript hace la conversión de expresiones a valores Boolean los cuales si utiliza propiamente para evaluar flujos.

Estas expresiones las debemos construir haciendo uso de los operadores lógicos, de comparación y de igualdad dados por el lenguaje, estos ya les dimos un primer vistazo en el módulo anterior cuando vimos el tema de coerción. Miremos inicialmente cuales son los operadores que tenemos a nuestra disposición en Javascritp

### Igualdad

- `==` Igualdad regular, es el operador que valida que ambos lados de la expresion tengan el mismo valor y hace conversiones necesarias para verificar igualdad
- `===` Igualdad estricta, es el operador que valida que ambos lados de la expresión sean iguales y no hace transformaciones por tanto verifica también el tipo del dato

> No se deben confundir los operadores de igualdad con el de asignación `=` el cual es el operador que utilizamos para asignar valores a variables, este no es utilizado para expresiones booleanas

### Comparación

- `>` Comparador de mayor, valida que la parte izquierda de la expresión represente un valor superior al de la derecha
- `<` Comparador de menor, valida que la parte izquierda de la expresión represente un valor inferior al de la derecha
- `>=` Comparador de mayor o igual, valida que la parte de la izquierda represente un valor mayor o igual al de la derecha
- `<=` Comparador de menor o igual, valida que la parte de la izquierda represente un valor menor o igual al de la derecha

### Lógicos

- `||` Or, operador `o` verifica que al menos uno de los lados de la expresión se cumpla
- `&&` And, es el operador `y` verifica que ambos lados de la expresión se cumplan
- `!` No, es el operador `no` es la negación de la expresión, retorna true si el negado de la expresión es verdadero

```
console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false
console.log(!false) // true
console.log(true && false) // false
console.log(10 == '10') // true
console.log(10 === '10') // false
console.log(10 > 9) // true
console.log(10 <= 9) // false
```

Siguiendo el código anterior tenemos un ejemplo de la utilización de cada operador, junto con su descripción podemos guiarnos sobre como construir validaciones mas complejas, al igual que con las operaciones aritmeticas podemos agrupar de manera de construir expresiones booleanas que dependen de varias condiciones, miremos un ejemplo ya con un concepto que miraremos a continuación que son los condicionales, su funcionamiento es intuitivo, sin embargo, enfoquemonos en el condicional dentro de parentesis luego de `if`.

```
if((true || false) && (true && !false)){
    console.log('verdadero');
}else{
    console.log('falso')
}
```

Así visualizamos como podemos apoyarnos de parentesis para construir situaciones mas complejas, por supuesto como lo vimos en módulos anteriores nuestras variables pueden contener valores booleanos y podemos apoyarnos de estas para contruir operaciones de verdadero o falso, así mismo, es importante mencionar que las variables cuyo valor apunte a null el programa las tomara como falso en las evaluaciones booleanas, miremoslo con un ejemplo.

```
const resultados = buscarInformacion('IDCliente123')
if(resultados) {
    console.log(resultados)
}else{
    console.log('No hay resultados para el client con el ID ingresado')
}

```

Por temas del ejemplo digamos que `buscarInformacion` es una función que busca data para un cliente ingresado como parametro en alguna base de datos, si no encuentra información no devuelve nada, es decir, es null por lo que podemos guiarnos de evaluar si resultados existe para saber si hubo o no resultados, es una forma bastante util de verificar si una variable le está apuntando a algún valor o es null.

Así entonces ya tenemos una idea de como construir expresiones lógicas que nos ayudarán a controlar el flujo de nuestros códigos, ahora miremos como las usamos para controlar flujos.

## Condicionales

Los condicionales son otro de los elementos fundamentales de los lenguajes de programación, estos los vas a encontrar en todos los lenguajes de programación y probablemente de una manera muy parecida.

Los condicionales hacen referencia a la manera de controlar el flujo de nuestro código, con estos podemos indicarle a nuestro código que porción de código ejecutar dependiendo de el resultado de una evaluación de verdadero o falso, para hacerlo mas claro miremos un ejemplo.

## If

```
let pregunta = 'Está lloviendo?'
console.log(pregunta)
const estaLloviendo = false
let respuesta;

if(estaLloviendo){
    respuesta = 'Si, está lloviendo, mejor llevas sombrilla'
}else{
    respuesta = 'No, no está lloviendo, puedes dejar la sombrilla'
}

console.log(respuesta) // No, no está lloviendo, puedes dejar la sombrilla
```

En el ejemplo anterior se hace una pregunta inicial la cual es Está lloviendo? en base al condicional `estaLloviendo` se le da el valor a la respuesta, de manera de que si está lloviendo, recomendamos utilizar sombrilla, caso contrario, recomendamos dejarla, esta evaluación se da según la expresión dentro de los parentesis luego de la palabra clave `if` y el primer bloque de código es el que se ejecuta si la evaluación da como resultado verdadero, si da falso podemos bien no hacer nada o haciendo uso de la palabra clave `else` indicar cual sería el flujo en caso contrario, es decir, si la evaluación da como resultado falso.

> Como se puede deducir de la estructura del if, cada posible resultado maneja su propio scope, siempre comprendido entre las llaves que encierran los procesos a ejecutar según el flujo, las variables definidas dentro solo existiran dentro de cada bloque como lo vimos en el módulo anterior

Los controladores de flujo se pueden anidar, es decir, se pueden usar unos dentro de otros de manera que evaluemos varios condicionales antes de definir lo que se ejecuta en caso verdadero, de esta manera podemos implementar situaciones más complejas haciendo uso de lo aprendido sobre expresiones, según requiramos, combinando operadores antes vistos

```
let pregunta = 'Empezó a llover, vas a necesitar la sombrilla?'
console.log(pregunta)
const estaLloviendo = true
const necesitasSalir = true
let respuesta;

if(estaLloviendo && necesitasSalir){
    respuesta = 'Si, necesito salir, parece que tendré que llevar sombrilla'
}else{
    respuesta = 'No, no tengo que salir o no está lloviendo por tanto no necesitaré la sombrilla'
}

console.log(respuesta) // Si, necesito salir, parece que tendré que llevar sombrilla'
```

En este caso ya nuestra respuesta depende no solo de si está lloviendo sino también de si necesitamos salir.

Pero, que pasa si no tenemos solo dos posibles flujos sino algunos más?

Para estos casos tenemos dos opciones, el `switch case` o `else if`

### Else If

Else if lo implementamos cuando requerimos mas casos alternos al primero verificado que requieren de verificar una condición también.

```
const momentoDelDia = 'tarde';
let saludo;

if(momentoDelDia == 'tarde') {
    saludo = 'Buenas tardes'
}else if (momentoDelDia == 'manana'){
    saludo = 'Buenos dias'
}else{
    saludo = 'Buenas noches, supongo'
}

console.log(saludo) // Buenas tardes
```

En este caso tenemos un ejemplo donde requerimos retornar el saludo dependiendo del momento del dia, si es de manana tenemos una respuesta, si es tarde tambien, si no tenemos claro que momento del dia es suponemos que podria ser noche pero no estariamos seguros, podria ser madrugada, por eso tenemos un flujo final para otros casos en general

Luego, puede suceder que dependiendo del valor que tome una expresión ejecutemos un flujo, para estos casos utilizamos un switch case

### Switch Case

Pongamos el siguiente ejemplo en el cual tenemos un menú de opciones y requerimos de ejecutar una función dependiendo de lo que ingrese el usuario.

```
const opcion = 1
console.log('Indica tu opción, 1 para sumar, 2 para restar y 3 para multiplicar.')

function calculadora(opcion, primerNumero, segundoNumero) {
    switch(opcion){
        case 1:
            return primerNumero + segundoNumero;
            break;
        case 2:
            return primerNumero - segundoNumero;
            break;
        case 3:
            return primerNumero * segundoNumero;
            break;
        default:
            console.log('Opcion invalida, por favor digita una opción posible')
            return null;
    }
}

calculadora(opcion, 2, 3) // 5
```

El ejemplo hace alusión a una calculadora, donde ingresamos la opción deseada y esta tiene un desenlace según la opción, si notamos este flujo también tiene la opción de un default el cual es un flujo que se ejecuta si ninguna de las opciones se cumple, por tanto encontramos una similitud al funcionamiento de `Else If` por lo que mas allá de temas computacionales según la estructura de lo requerido queda a criterio del desarrollador escoger cual usar.

En este caso, el bloque de código que se ejecuta según el caso que sea verdadero o para el caso de `default` si ninguno de los definidos se cumple, se hace luego de los dos puntos `:` por lo tanto para cada flujo posible debemos indicar el valor que debe tomar la variable luego de la palabra clave `case` y luego de los dos puntos el código que se ejecutaría.

> Importate mencionar el tema de la keyword `break` la cual nos sirve para indicar donde termina el bloque de código de cada flujo posible, esta keyword aparece en muchos mas lugares en el desarrollo pero por ahora entender esto, es utilizada para indicar cuando detener ejecuciones de flujos

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `Operadores de todo tipo`, `Condicionales`, `Control de flujo` y `Expresiones de verdero o falso`, estos son conceptos fundamentales y basicos sobre Javascript los cuales será importante tener bien claros para la definición de nuestros códigos, el tema de condicionales ya nos abre las puertas a códigos mucho mas complejos y con un comportamiento en base a parametros de entrada, podemos imaginarnos ahora nuestros códigos como super funciones, ya nuestros desarrollos se empiezan a asemejar mucho mas a desarrollos del mundo real a nivel productivo.
