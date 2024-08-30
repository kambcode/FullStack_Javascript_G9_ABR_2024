## Tarea: Creando un proyecto con NodeJS y NPM

1. Crea un nuevo proyecto en nodeJS utilizando el comando `npm init` tal cual cómo se vio en la clase pasada. 

2. Dentro de el package.json de tu proyecto debes agrear un script que ejecute un archivo llamado init.js (no olvide agregar la propiedad `"type": "module"` a el package.json). Ejemplo:

    ```
    "type": "module",
    "script": {
        "start": "node init.js"
    }
    ```


    **OPCIONAL** incluye nodemon a tu proyecto y ejecuta el archivo async.js con nodemon

3. Crea un archivo `async.js` debe hacer lo siguiente:
    
    - **Crear una Función Asíncrona:**
    
        - Define una función asíncrona llamada `esperarSegundos` que reciba como parámetro un número entero que represente la cantidad de segundos a esperar.
    
    - **Esperar la Cantidad de Segundos Especificada:**
    
        - Dentro de la función esperarSegundos, utiliza `setTimeout` para esperar la cantidad de segundos especificada como parámetro.
    
    - **Mostrar un Mensaje de Éxito:**
    
        - Después de esperar el tiempo especificado, muestra un mensaje en la consola indicando que ha pasado el tiempo especificado.

4. Al final de el archivo `async.js` debes exportar la función `esperarSegundos`, de la siguiente forma:
 
```javascript

const esperarSegundos = () => {
    // Incluye la logica de la función acá
}

export default esperarSegundos;
```

5. Ahora crea el archivo principal `init.js` en este archivo debes importar a la función `esperarSegundos` usando la siguiente linea.

```javascript
import esperarSegundos from './async.js'; // Aca debes poner la ruta donde creaste el archivo async.js

//Despues de esto ya podras usar la función esperarSegundos en este archivo
```

6. Finalemente en el archivo init.js, llama a la función esperarSegundos con diferentes valores para probar diferentes tiempos de espera.
