## Tarea: Implementar un componente de reloj en tiempo real

### Explicación:
En esta tarea vamos a practicar la creación de "High Order Components (Componenets de alto nivel)" y vamos a aplicar algunos de los conceptos vistos en clase como el ciclo de vida de el componente usando el hook `useEffect`. Asi como llamados a la API de rick and morty para consultar información

### Pre-requisitos

En esta tarea vamos a usar la API de rick and morty para objeter la información de un personaje de esta famosa serie. El endpoint que nos interesa en esta tarea es `GET https://rickandmortyapi.com/api/character/<ID_PERSONAJE>`, el cual nos traerá la información detallada de uno de los personajes de la serie dependiendo de su ID, asi por ejemplo si queremos ver la información de un personaje en particular solo debes cambiar el ID en la ruta, por ejemplo:

  - Si haces un GET a https://rickandmortyapi.com/api/character/1 verás la información de Rick Sanchez
  - Si haces un GET a https://rickandmortyapi.com/api/character/2 verás la información de Morty Smith
  - Si haces un GET a https://rickandmortyapi.com/api/character/10 verás la información de Alan Rails

Si lo deseas puedes ver más información de la API en este link https://rickandmortyapi.com/documentation/#rest pues la usaremos en futuras tareas

### Pasos a seguir:

#### Creación del componente de CharacterCard.jsx: 
Vamos a crear un componente de alto nivel que se encarge de renderizar una tarjeta de un personaje usando los componenentes creados en la tarea anterior (Title.jsx, Image.jsx, Details.jsx)

  - Crea un nuevo archivo llamado CharacterCard.jsx dentro del directorio src/components.
  - Abre el archivo CharacterCard.jsx en tu editor de código.

    CharacterCard.jsx

    ```javascript
      import React from 'react';
      import Title from './Title';
      import Image from './Image';
      import Details from './Details';

      function CharacterCard(props) {
        // Recuerda que este es solo un componente funcional, 
        // tu debes incluir estilos para hacerlo más atractivo
        return (
          <div>
            {/* Nombre de el personaje */}
            <Titulo title={props.name}/>
            {/* Imagen de el personaje */}
            <Image url={props.image} />
            {/* Detalles de el personaje */}
            <Details 
              genre={props.genre} 
              status={props.status} 
            />
          </div>
        );
      }

      export default CharacterCard;
    ```
  - El anterior es solo un ejemplo de el componente, tu puedes crearlo cómo te parezca mejor. Recuerda añadir estilos personalizados para hacer tu componente más atractivo

#### Usando Hooks para hacer que la información de el componente se consulte desde la API

Ahora vamos a consultar la información de el personaje desde la API

1. Primero vamos a crear en nuestro archivo `App.jsx` 4 variables de estado para controlar la información de nuestro personaje de rick and morty (name, image, genre, status). Ejemplo

  ```javascript
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
  ```

2. Despues vamos a usar `fetch` para consultar la información de un personaje de rick and morty. para el siguiente ejemplo usaremos el personaje con el ID 1 (Rick Sanchez)

  ```javascript

      const rickAndMortyCharacterId = 1;

      useEffect( () => {
        // Este useEffect se ejecutará una única vez cuando el componente se monte
        fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
        .then((response) => response.jsxon()).
        .then((result) => 
            // Acá podemos procesamos la respuesta de el endpoint
            console.log(result); // Resultado de el endpoint

            // Utiliza la variable result para actualziar las variables de estado de el paso 1
            setName(result.name);
        );
    }, [])  
  ```
3. Finalmente utiliza las variables de Estado creadas en el paso 1 para renderizar el componente CharacterCard.

```javascript
import React from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  {/* 
    Paso 1: Crea las variables de estado para
      - name
      - image
      - genre
      - status

    Paso 2. Utiliza la API para consultar el detalle de un personaje
    y con la respuesta de la API poder actualziar las variables de Estado creadas 
    anteriormente
  */}


  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      {/* 
        Paso 3. Ahora debes renderizar el componente CharacterCard.jsx 
        enviandole como propiedades la información consultada 
        desde la API y que guardaste en las variables de estado de el paso 1 
      */}
      <CharacterCard 
        name={name}
        image={image}
        genre={genre}
        status={status}
      >
    </div>
  );
}

export default App;
```

#### Ejecución del proyecto:

Guarda todos los cambios realizados.

Ejecuta el proyecto de React utilizando el comando `npm run dev`.

Visita  http://localhost:5173 en tu navegador para ver el resultado de la aplicación.

Ahora te invitamos a cambiar el valor de la constante `rickAndMortyCharacterId` y ver como se renderiza la información de otro personaje en página 

### Creación de un High Order Component (Opcional)
Crea un nuevo componente llamado `RickAndMortyCharacterCard.jsx` que reciba como propiedad un id, tu componente debe ser capaz de recibir ese ID y consultar la información de el personaje de rick and morty para luego renderizar el componente `CharacterCard.jsx`. 

RickAndMortyCharacterCard.jsx
```javascript
import React from 'react';
import CharacterCard from './components/CharacterCard';

function RickAndMortyCharacterCard(props) {

  const rickAndMortyCharacterId = props.id;
  {/* 
    Incluye la logica de consulta de la API. los hooks useState y useEffect
  */}


  return (
    <div>
      <CharacterCard 
        name={name}
        image={image}
        genre={genre}
        status={status}
      >
    </div>
  );
}

export default RickAndMortyCharacterCard;
```

Esta es una muy buen práctica asi ahora en tu App.jsx puedes ver la información de varios personajes solamente reutilizando tu componente `RickAndMortyCharacterCard`

Con esta mejora tu archivo App.jsx quedara sin ninguna lógica particular y se verá asi:

App.jsx
```javascript
import React from 'react';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';

function App() {
  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      {/* 
        Ahora con esta lógica puedes renderizar vla información de varios personajes
      */}
      <RickAndMortyCharacterCard id={1}>
      <RickAndMortyCharacterCard id={2}>
      <RickAndMortyCharacterCard id={3}>
      <RickAndMortyCharacterCard id={10}>
    </div>
  );
}

export default App;
```