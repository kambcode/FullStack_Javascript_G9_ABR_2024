## Tarea: Generado de Numeros y detector de numeros pares

### Objetivo

Practicar el uso del módulo `fs` para escribir y leer archivos, y aplicar una lógica sencilla para encontrar números pares.

### Descripción del ejercicio

1. Crea un nuevo proyecto en nodeJS utilizando el comando `npm init` tal cual cómo se vio en clases anteriores. 

2. Dentro de el package.json de tu proyecto debes agrear un par scripts que ejecuten un archivo llamado generator.js y un archivo find.js  Ejemplo:

    ```
    "script": {
        "generate-file": "node generator.js",
        "find-even-number": "node find.js"
    }
    ```


    **OPCIONAL** incluye nodemon a tu proyecto y ejecuta los archivos con nodemon

3. Crea un archivo `generator.js` este archivo es un script que utiliza la librería FileSystem (fs) para generar un archivo llamado `numeros.txt` que contenga los números del 1 al 1000, separados por coma  `1,2,3,4,5 ... ,1000` o uno por línea de la siguente forma.
    
    
    ```
        1
        2
        3
        ...
        1000
    ```

    ```Contenido de el archivo numeros.txt ```
    

4. Ahora crea un archivo llamado `find.js` este script debe hacer uso de la librería `fs` para leer el archivo `numeros.txt`, y debe mostrar en pantalla por medio de un `console.log` los numeros pares presentes en el archivo `numeros.txt`

    **NOTA** recuerda que para saber si un numero es par solo debes validar que el residuo sea cero 

    ```javascript
    const numero = parseInt(numberString); // parseInt convierte un string a número
    if (numero % 2 === 0) {
       //  es par
    } else {
        // No es par
    }
    ```
 
6. Finalemente prueba tu programa corriendo los comandos `npm run generate-file` y despues `npm run find-even-number`

## OPCIONAL

De manera opcional puedes hacer que el script `find.js` no solo muestre los números en consola si no que genere un nuevo archivo `.txt` con solo los números pares
