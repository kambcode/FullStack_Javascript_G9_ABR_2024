## Introducción a React

### ¿Por qué utilizar React o cualquier otro framework de FrontEnd?

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y dinámicas. Algunas de las razones para utilizar React o cualquier otro framework de FrontEnd incluyen:

- **Componentización:** React utiliza un enfoque basado en componentes para la construcción de interfaces de usuario, lo que permite dividir la interfaz en pequeños componentes reutilizables. Esto facilita la creación, mantenimiento y reutilización del código.

- **Virtual DOM:** React utiliza un Virtual DOM para optimizar el rendimiento de las aplicaciones web. El Virtual DOM es una representación virtual de la estructura de la página que React utiliza para minimizar las operaciones de manipulación del DOM real, lo que resulta en una mayor eficiencia y velocidad de rendimiento.

- **Declarativo:** React utiliza un enfoque declarativo para definir la interfaz de usuario, lo que significa que los desarrolladores pueden describir cómo debería lucir la interfaz en función del estado de la aplicación, en lugar de tener que manipular directamente el DOM.

- **Comunidad y ecosistema:** React cuenta con una gran comunidad de desarrolladores y un ecosistema robusto de herramientas y bibliotecas que facilitan el desarrollo de aplicaciones web modernas.

### Iniciar un primer proyecto en React (Hola Mundo)

Para iniciar un proyecto en React y crear un "Hola Mundo", puedes seguir estos pasos:

1. Instala Node.js si aún no lo tienes en tu sistema.
2. Abre una terminal y navega hasta la ubicación donde deseas crear tu proyecto.
3. Ejecuta el siguiente comando para crear un nuevo proyecto de React:

```
npm create vite@latest

```

Sigue las instrucciones de vite

4. Una vez que se complete la instalación, navega al directorio de tu proyecto:
```
cd mi-proyecto-react
```

5. Abre el proyecto en tu editor de código favorito y edita el archivo `src/App.js`. Reemplaza el contenido con el siguiente código para mostrar un mensaje de "Hola Mundo":

```
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
```
Guarda los cambios y vuelve a la terminal.

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```
npm start
```
Abre tu navegador web y visita http://localhost:5173 para ver tu aplicación de "Hola Mundo" en acción.

## ¿Qué es JSX?
JSX (JavaScript XML) es una extensión de sintaxis de JavaScript que permite escribir código HTML dentro de archivos de JavaScript. JSX facilita la creación de interfaces de usuario en React al permitir a los desarrolladores escribir código HTML y JavaScript juntos en la misma archivo.

Por ejemplo, en React, puedes escribir código como este utilizando JSX:

```
const element = <h1>Hola Mundo</h1>;
```

El código anterior se compila a JavaScript puro por React y se convierte en algo similar a esto:

```
const element = React.createElement('h1', null, 'Hola Mundo');
```
## Uso de CSS en React
Hay varias formas de aplicar estilos CSS en React:

Estilos en línea: Puedes aplicar estilos directamente a los elementos utilizando la propiedad style en JSX. Por ejemplo:

```
const divStyle = {
  color: 'blue',
  backgroundColor: 'lightgray'
};

function App() {
  return <div style={divStyle}>Hola Mundo</div>;
}
```

Archivos de estilos externos: Puedes importar archivos CSS externos en tus componentes de React utilizando la directiva import. Por ejemplo:

```
import './styles.css';

function App() {
  return <div className="mi-clase">Hola Mundo</div>;
}
```

Módulos de estilos: Puedes utilizar módulos de estilos CSS en React para evitar conflictos de nombres de clases. Por ejemplo:

```
import styles from './styles.module.css';

function App() {
  return <div className={styles.miClase}>Hola Mundo</div>;
}
```
En este caso, styles.miClase hace referencia a una clase CSS definida en un archivo styles.module.css.


Este es un resumen de los conceptos básicos de React.