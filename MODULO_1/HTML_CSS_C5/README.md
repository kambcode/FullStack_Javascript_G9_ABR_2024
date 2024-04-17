# Conceptos de CSS

En este módulo vamos a ver unos conceptos importantes sobre CSS que van enfocados a como seleccionamos a que elementos se aplicaran nuestros estilos y a entender como funciona la `especificidad` la cual si la comprendemos de manera correcta nos dará total entendimiento de por qué se aplican los estilos como se aplican y como implementarlos para solucionar bugs de manera que nuestro código funcione de la manera esperada.

## Selectores CSS

Los selectores CSS son un concepto el cual define sobre que elementos se van a aplicar determinados estilos, es decir, este concepto estudia la selección de etiquetas a las cuales le serán aplicados nuestros estilos dependiendo de la manera en que fueron definidos los estilos con base a una serie de reglas definidas.

Miremos un ejemplo inicial de que son los selectores en un código CSS.

```
.titulos {
    text-align: center;
    font-weight: bold;
}

#tituloPrincipal {
    font-size: 40px;
}
```

En este caso, definimos dos reglas para estilos CSS, la primera llamada `titulo` y la segunda llamada `tituloPrincipal`, la gran diferencia que notamos es que una está definida como `.titulo` y la otra como `#tituloPrincial`, es aquí donde se aplica el concepto de selectores, ese caracter que precede el nombre de las reglas que para la primera es un punto (`.`) y para la segunda es un numeral (`#`) lo que hace es aplicar los selectores. Miremos ahora el código HTML sobre el que se aplicaría esta hoja de estilos.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link href="./test.css" rel="stylesheet" />
    </head>
    <body>
        <p class="titulos" id="tituloPrincipal">Titulo principal</p>
        <p class="titulos">Titulo Secundario</p>
    </body>
</html>
```

Como vemos tenemos dos etiquetas `<p>` a las cuales les aplicamos distintos atributos, para la primera que contiene el texto 'Titulo principal' le aplicamos un atributo clase y otro atributo id, para el caso de la segunda solamente clase.

Al abrir este HTML visualizaremos una página con solo el siguiente contenido.

![Ejemplo 1](./resources/PrimerEjemplo.png)

Como observamos la etiqueta que contiene el texto de Título Principal tiene un tamaño mucho mayor pese a que tiene la misma clase que el título secundario, aquí es donde aplicamos los selectores.

Como lo describimos anteriormente, los selectores nos sirven para indicar a que etiquetas se les aplica que estilos, para el caso del titulo principal le asignamos la clase de `titulo` y el id de `tituloPrincipal`, con esto en combinación con la manera como definimos las reglas CSS le estamos diciendo a nuestro HTML que todas las etiquetas que tengan como id `tituloPrincipal` van a tener un font-size de 40px y también que todas las etiqueta con clase `titulo` van a tener los correspondientes estilos, entonces, entendemos que para definir reglas de id utilizamos el caracter `#` y para definir reglas para clases utilizamos el punto `.`. Miremos entonces los selectores que existen y como utilizarlos.

### **Selectores básicos**

### De tipo de etiqueta

Estos selectores son aplicados para todas las etiquetas con determinado nombre, se definen simplemente con el nombre de la etiqueta sin ningún caracter predecesor. Ejemplo.

```
h1 {
    font-weight: bold;
    text-align: center;
    padding: 10px;
    font-size: 100px;
}
```

En este caso a todas las etiquetas `<h1>` se les aplicarán los definidos estilos.

### De clase

Este es uno de los vistos en el primer ejemplo, su predecesor es el caracter punto (`.`), es el selector que indica que a los elementos que cuenten con dicha clase implementaran los estilos definidos. Ejemplo.

```
.titulos {
    text-align: center;
    font-weight: bold;
}
```

Esta porción de código indica que todos los elementos con el atributo clase = 'titulos' implementaran los estilos definidos.

### De ID

Este es el segundo de los vistos en el primer ejemplo, su predecesor es el caracter numeral(`#`), es el selector que indica que a los elementos que cuentan con dicho id implementaran los estilos definidos. Ejemplo.

```
#tituloPrincipal {
    font-size: 40px;
}
```

Según el ejemplo, todas las etiquetas que cuenten con el id 'tituloPrincipal' implementaran los estilos definidos.

### Universal

Este es un selector el cual lo que hace es aplicar los estilos definidos sobre todas las etiquetas de nuestro HTML, se utiliza únicamente el caracter asterisco (`*`). Ejemplo.

```
* {
    color: red;
    background-color: yellow;
}
```

Esto lo que hará es aplicar los estilos a todas las etiquetas HTML dentro de nuestro documento.

### De atributo

Este selector lo que nos permite es aplicar estilos a las etiquetas que cuenten con los atributos definidos en las reglas CSS. Miremos un ejemplo

```
[cursivo] {
    font-style: oblique;
}
```

En este caso a todas las etiquetas que lleven el atributo 'cursivo' se les aplicará el estilo definido, esta regla se puede utilizar de diferentes maneras, miremos las más comunes.

```
/* Elementos cuyo atributo cursivo sea igual a "true" */
[cursivo="true"]{
  font-style: oblique;
}

/* Elementos cuyo atributo cursivo sea igual a "false" */
[cursivo="false"]{
  font_style: italic;
}

/* Elementos cuyo estiloLetra href contenga "cursivo" */
[estiloLetra*="cursivo"]{
  font-style: oblique;
}

/* Elementos cuyo atributo estiloLetra empiece por "titulo" */
[estiloLetra^="titulo"]{
  font-weight: bold;
}

/* Elementos cuyo atributo href termine en ".com" */
[href$=".com"]{
  color: green;
}

/* Elementos cuyo atributo href contenga la palabra "www." */
[href~="www."]{
  color: blue;
}
```

### **Selectores combinadores**

Los selectores combinadores son selectores que nos ayudan a aplicar estilos con base a relaciones entre elementos, para hacerlo más claro miremos los selectores de los cuales disponemos y ejemplos.

### Combinador de hermanos adyacentes

Hace referencia a un selector de próximo hermano. Solo seleccionará un elemento especificado que esté inmediatamente después de otro elemento especificado. Ejemplo.

```
img + span.titulo {
    font-style: italic;
}
```

Este CSS hará efecto sobre el siguiente HTML.

```
<img src="./resources/PrimerEjemplo.png" /><span class="titulo" >Titulo de la foto</span>
```

Como la etiqueta span es la hermana que sigue de img `hermana adyacente` entonces se aplican los estilos sobre las etiquetas span de clase título.

### Combinador general de hermanos

Funciona de la misma manera que el anterior, pero ahora el selector no aplica solo para el primer hermano adyacente, sino para todos los hermanos del elemento dada la regla.

```
p ~ span {
    color: blue;
}
```

Aquí indicamos entonces con el caracter (`~`) la regla general de hermanos para las etiquetas `<span>` hermanas de `<p>`. Miremos como funciona.

```
        <span>Este span no es rojo.</span>
        <p>Aquí hay un párrafo.</p>
        <code>Aquí hay algo de código.</code>
        <span
            >Aquí hay un span. Es rojo porque va precedido de un párrafo y ambos
            comparten el mismo padre.</span
        >
        <span
            >Este también toma el estilo de azul porque no solo toma al hermano
            adyacente sino a todos los hermanos en general</span
        >
```

Según el ejemplo notamos entonces que es muy parecido a la regla anterior, pero en este caso aplica no solo para los hermanos adyacentes sino para todos los hermanos.

### Combinador de hijo

Este selector es de los más utilizados, nos sirve para indicar que las etiquetas hijas de unas reglas tomarán los estilos, el caracter que se utiliza para la relación es el mayor que `>`. Miremos un ejemplo.

```
ul > li {
    color: purple;
}
```

Indicamos que todos los elementos `<li>` que sean hijos de una etiqueta `<ul>` tomarán el color de morado.

```
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
```

Según lo definido, entonces los 3 elementos dentro de `<ul>` tomarán el color de morado.

> Cabe destacar que solo aplica para los hijos directos de la regla, no para TODAS las etiquetas del tipo indicado dentro del padre.

### Combinador de descendientes

Este selector es muy parecido al de hijo, pero en este caso si se aplica para TODAS las etiquetas dentro de la primera, no importa si son hijos directos o si son hijos de otro hijo, se aplica para todas. En este caso no se utiliza caracter, simplemente se nombra primero el padre y luego la descendencia.

```
div span {
    color: orange;
}
```

Todos los elementos `<span>` definidos dentro de un div tomarán el color de naranjado

```
<div>
    <p>
        Este p es el hijo directo del div
        <span
            >No soy hijo pero tomo el estilo porque es de
            descendencia</span
        >
    </p>
</div>
```

Así entonces, según lo explicado como lo indica el texto de la etiqueta `<span>` tomará el color de naranjado pese a no ser hijo directo porque la regla fue definida de descendencia.

### **Pseudoelementos**

Los pseudo elementos son un concepto bastante importante en CSS, estos se usan en combinación con los selectores para lograr comportamientos mucho mas personalizados, estos en CSS3 se combinaron con las pseudo clases para ofrecernos muchísimas más personalizaciones en cuanto a funcionamiento de nuestros estilos. Miremos como es su implementación mediante un ejemplo.

```
p::first-line {
    color: black;
}
```

En el ejemplo anterior definimos que la primera línea de las etiquetas `<p>` va a tener el color negro, entonces, si tuviéramos un texto de varias líneas como el siguiente.

```
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
    ducimus? Dolore ratione cum commodi, exercitationem ullam magnam
    placeat doloribus excepturi. Possimus ullam corporis voluptatum
    omnis est, neque dolores reiciendis distinctio. Adipisci blanditiis
    quo saepe sed fuga, dolorem aliquam deserunt aliquid. Laboriosam
    animi officiis nemo aspernatur sed accusamus cumque, labore dolorem.
    Enim dicta inventore odio officiis quam, dignissimos atque qui sunt.
    Quisquam veniam corrupti doloremque? Deleniti nostrum sunt
</p>
```

La primera línea de dicho elemento tomaría ese estilo.

De esta misma manera se aplican las pseudo clases, estas tienen la misma representación solo que en lugar de utilizar doble dos puntos `::` utilizamos solo uno `:`. Miremos un ejemplo de pseudo clases.

```
input:checked {
    height: 100px;
    width: 100px;
}
```

En este ejemplo indicamos a la pseudo clase de las etiquetas `<input>` que cuando el valor de checked esté activo tome los estilos indicados. Miremos el HTML

```
<input type="checkbox"/>
```

Cuando la entrada detecte que su propiedad checked cambia a true, va a tomar los estilos correspondientes.

Los pseudo elementos y pseudo clases son muchísimos destinados a necesidades bastante especificas, miremos los más comunes para tener un vistazo de sus posibilidades.

- `:active` Selecciona las etiquetas tipo link activas
- `:checked` Selecciona las etiquetas input tipo checkbox checked
- `:disabled` Selecciona todos los inputs con su propiedad disabled en true
- `::first-letter` Selecciona la primera letra de las etiquetas indicadas
- `::first-line` Selecciona la primera linea de las etiquetas indicadas

Estos son unos de muchísimos pseudo elementos y pseudo clases que existen, nos permiten darle un tipo de interactividad a nuestra aplicación. Si quieres leer mas sobre las posibilidades y uso de estos, haz clic [**aquí**](https://www.w3schools.com/cssref/css_selectors.php).

Otras pseudo clases son `:hover`, `:link` y `:visited` como en los casos anteriores definen estados particulares de un elemento, cuando el mouse esta sobre el elemento, cuando el link no ha sido visitado o cuando el link ya fue visitado respectivamente a continuación unos ejemplos de su sintaxis:

```
/*Cuando el mause este sobre el elemento*/
a:hover {
  background-color: yellow;
}
/* Link sin clickear */
a:link {
  color: #FF0000;
}

/* link clickeado */
a:visited {
  color: #00FF00;
}
```
**Tip:**, el selector :hover puede ser utilizado sobre cualquier elemento, no solo sobre links.


> El uso de los elementos vistos en códigos complejos y extensos puede llevar a funcionamientos inesperados de nuestra aplicación por cruce de estilos entre reglas definidas por nosotros, por esto es muy importante manejar un flujo de trabajo organizado con buenas prácticas que nos permitan llevar traza de los estilos y reglas que implementamos, también resulta muy importante comprender el tema de la `especificidad` el cual es tema de otro módulo, pero nos permite entender el orden o importancia que se le da a las reglas cuando hay varias que aplican contra un elemento, este orden depende de la manera como fueron declaradas las reglas, puedes leer sobre el tema [**aquí**](https://developer.mozilla.org/es/docs/Web/CSS/Specificity#:~:text=La%20especificidad%20es%20la%20manera,diferentes%20tipos%20de%20selectores%20CSS.).

## Box Model - Modelo de caja

Vistas las reglas de estilos y las distintas maneras de implementarlas, empecemos ahora con un tema fundamental de nuestras construcciones web que tiene que ver con el layout o distribución de nuestra página. Por supuesto, las limitaciones de diseño de nuestras páginas se limitan a nuestra imaginación, luego miraremos como plantear estas distribuciones pero ahora entendamos como funciona cada elemento y como se posición según su entorno en pantalla.

Cada elemento HTML está contenido dentro de una caja, sea un título, una imagen, un texto o cualquier otro elemento siempre está contenido dentro de una caja, esta caja describe su posición en pantalla y describe la distribución de su contenido, miremos los elementos de esta caja, como modificarlos y como nos sirven para plantear la distribución de nuestro contenido.

Miremos la siguiente imagen.

![Ejemplo 1](./resources/BoxModel.png)

En esta imagen se visualiza el box model con todos sus elementos, dando un primer vistazo notamos que consiste en un modelo de varias capas, cada una seguida de otra. Miremos cada elemento, a que se refiere y como modificarlo.

### Content

El primer cuadrado de adentro hacia afuera es el `content`, este se refiere al espacio donde va nuestro contenido realmente, es decir, si por ejemplo nosotros tenemos un texto o una imagen, este testo o imagen realmente va en este cuadro llamado content, es la parte visible de nuestro elemento. Esta parte de nuestro modelo de caja la podemos variar de tamaño mediante el uso de las propiedades `width` y `height`. Por ejemplo

```
.container {
    width: 100px;
    height: 100px;
}
```

### Padding

Este es el segundo cuadrado, es el que establece el área que recubre el contenido, lo que hace es básicamente centrar más nuestro contenido dependiendo de la dimensión donde le demos un valor, el valor se modifica con las propiedades `padding`. Ejemplo

```
.container {
    padding: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
}
```

Dependiendo de nuestra necesidad podemos aplicarle padding como necesitemos.

### Border

El tercer cuadrado de adentro hacia afuera, es el área que cubre nuestro padding y contenido, es el área antes del margin que es el que finalmente dictamina donde inician los demás elementos con respecto al tratado. Este área generalmente es utilizado para darle estilo a la finalización de nuestro contenido con bordes con estilos, colores y sombras. Este lo podemos modificar con distintas propiedades que hacen alusión a `border`.

```
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

### Margin

El margen es el que contiene el padding, nuestro contenido y el borde, este es más importante con respecto a la distribución porque es el valor que tiene realmente relevancia en cuanto a la posición de otros elementos con respecto al que estamos tratando porque este relaciona la distancia que hay desde el final del tamaño de nuestro elemento hasta el inicio del siguiente. Sus valores los podemos modificar con la propiedad `margin`.

```
.container {
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 30px;
    margin-left: 40px;
}
```

Entender el modelo de caja es muy importante pues de este dependen muchas propiedades como el text-align y en general de este parten todos los distintos metodos de posicionamiento y de layout que veremos para nuestras construcciones.

## Position

Veamos ahora una propiedad la cual nos permite sobreponer elementos HTML para generar diseños mucho mas personalizados para nuestra distribución de pagina, entre otras muchas utilidades de esta propiedad.

Position es una propiedad CSS para nuestros elementos la cual indica cual es el metodo de posicionamiento que va a utilizar nuestro elemento, esta propiedad se apoya de las propiedades de ubicación `top`, `left`, `right`, `bottom` para indicar la posición del elemento. Veamoslo con un ejemplo.

```
div.relative {
    position: relative;
    width: 400px;
    height: 200px;
    border: 3px solid #73ad21;
}

div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid #73ad21;
}
```

En este caso utilizamos la propiedad para indicar un primer div que es relative y un segundo que es absolute, miremos el HTML.

```
<div class="relative"><div class="absolute"></div></div>
```

El resultado en el HTML es unos div con la siguiente distribución.

> Entiéndase que el contorno verde es el border de cada div

![Position](./resources/EjemploPosition.png)

Para trucos como este nos sirve la propiedad position, miremos entonces que pasó aquí realmente.

El div más grande que contiene al segundo es el declarado como `relative`, esta propiedad lo que hace es permitirnos mover nuestro elemento en función a su posición normal inicial, en este caso del ejemplo no le estamos asignando ningún valor a las propiedades de posicionamiento pero al ser relativo permite que se superpongan elementos sobre este. Luego, nuestro segundo elemento, al ser absolute, se ubica a partir de la posición de su elemento padre, este caso, del primer div, por lo que se ubica partiendo de las propiedades de ubicación dadas y con base a la posición de su elemento padre.

Miremos los distintos valores que puede tomar esta propiedad y su funcionamiento.

- `static` Es el valor por defecto de esta propiedad, los elementos estáticos no toman en cuenta las propiedades de ubicación para su posicionamiento y funcionan de la manera habitual.
- `relative` Es posicionado con base a su posicionamiento normal, las propiedades de ubicación en un elemento relativo generan que se mueva con base a los valores de las propiedades partiendo de su posición normal, el resto de contenido no será ajustado para coincidir con los espacios dejados por el elemento.
- `fixed` Es posicionado con base al viewport, lo que significa que se mantiene en la misma posición incluso si la página se le hace scroll, siempre va a estar en la misma posición de la pantalla definida por las propiedades de ubicación
- `absolute` Es posicionado con base a su ancestro con position más cercano, si no tiene ningún ancestro con position cercano o no tiene en absoluto este se posicionará con base al body del documento y se moverá con el scroll de la página. Los elementos con position absolute salen de flujo normal de posicionamiento y pueden ubicarse encima de elementos.

Esta propiedad entonces, nos sirve para ubicar elementos con posicionamientos especiales, hablemos por ejemplo de cuando queremos que nuestra página tenga un navbar que siempre está visible en la parte superior independiente del scroll, o de un chatbot que siempre está en la parte inferior independiente del scroll.

## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `selectores`, `box model` y `position`, todos elementos CSS que nos ayudan a aplicar estilos y que son base a los conceptos referentes a layout de página que veremos en futuros módulos, con estos conocimientos podremos avanzar a darle una estructura muy personalizada a nuestras páginas.
