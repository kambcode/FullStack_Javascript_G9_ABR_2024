## Tarea: Dividir el proyecto en al menos tres componentes nuevos: Titulo, Imagen y Descripión

### Explicación:
Esta tarea tiene como objetivo expandir el proyecto anterior mediante la creación de tres componentes nuevos en lugar de mostrar toda la información en un solo componente. A través de esta tarea, podrás comprender cómo trabajar con props y estados en los componentes de React, así como el ciclo de vida de un componente.

### Pasos a seguir:

1. Creación de los componentes:
    
    - En el directorio `src`, crea una nueva carpeta llamada components.
    - Dentro de la carpeta components, crea tres archivos nuevos: Titulo.jsx, Imagen.jsx y Details.jsx.

2. Implementación de los componentes:

    Abre cada archivo creado (Titulo.jsx, Imagen.jsx y Details.jsx) en tu editor de código.

    Implementa cada componente de la siguiente manera:

    Title.jsx: Las propiedades de este componente son
      - *title* (string). Ejemplo: "Rick Sanchez"

      ```javascript
      import React from 'react';

      function Title(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return <h1>{props.title}</h1>;
      }

      export default Title;
      ```

    Image.jsx: Las propiedades de este componente son

      - *url* (string). Url con la ruta de la imagen de el artista/personaje
      ```javascript
      import React from 'react';

      function Image(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return <img src={props.url} alt="Foto de el artista/personaje" />;
      }

      export default Image;
      ```

    Details.jsx: Las propiedades de este componente son

    - *genre* (string). Genero de el artista/personaje Eg. "masculino"
    - *status* (string). Estado de el artitas, Eg. "Vivo" / "Fallecido"
      ```javascript
      import React from 'react';

      function Details(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return (
          <div>
              <p>
                <b>Genero:</b> {props.genre}
              </p>
              <p>
                <b>Estado:</b> {props.status}
              </p>
          <div>
        );
      }
      export default Details;
      ```

3. Integración de los componentes en App.jsx:

    Abre el archivo App.jsx en el directorio src.
    Modifica el contenido del componente App para utilizar los nuevos componentes Titulo, Imagen y detalles de el artista/personaje:
    ```javascript
    import React from 'react';
    import Title from './components/Title';
    import Image from './components/Image';
    import Details from './components/Details';

    function App() {
      // Recuerda que este es solo un componente funcional, 
      // tu debes incluir estilos para hacerlo más atractivo
      return (
        <div>
          {/* Titulo de el artista/personaje */}
          <Titulo
            title={}
          />
          {/* Imagen de el artista/personaje */}
          <Image
            url={} 
          />
          {/* Detalles de el artista/personaje */}
          <Details
            genre={} 
            status={} 
          />
        </div>
      );
    }

    export default App;
    ```

4. Ejecución del proyecto:

Guarda todos los cambios realizados.
Ejecuta el proyecto de React utilizando el comando `npm run dev`.

Visita  http://localhost:5173 en tu navegador para ver el resultado de la aplicación.
¡Con estos pasos, habrás dividido el proyecto en tres componentes nuevos y aprendido cómo integrarlos en la aplicación de React! Este enfoque te ayudará a comprender mejor el concepto de componentización y cómo trabajar con props y estados en React.


A continuación te presentamos un ejemplo de cómo podria verse tu tarjeta con estilos

![homework](./resources/card.png)

## RETO

Crea un componente llamado CharacterCard.ts, este componente debe agrupar el Titulo, Imagen y detalles de el artista/personaje. La idea de este componente de alto nivel sea capaz de mostrar toda la información de el artista/personaje. Ahora usa tu nuevo componente en `App.jsx` para mostrar una cuadricula con mínimo 3 artistas/personajes diferentes
