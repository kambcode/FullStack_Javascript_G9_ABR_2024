## Tarea: Tarea → Calculadora Node.js

### Objetivo

En esta tarea, se te pide desarrollar una calculadora básica en Node.js que pueda realizar operaciones simples de suma, resta, multiplicación y división. La calculadora deberá recibir los números y la operación directamente como argumentos de línea de comandos al ejecutar el script.

### Descripción del ejercicio

1. Inicialización del proyecto. 
- Crea un nuevo directorio para tu proyecto.
- Inicializa un nuevo proyecto de Node.js utilizando **`npm init`**.
- Crea los archivos necesarios para la tarea, como **`calculadora.js`**, **`package.json`** y **`README.md`**.

2. Desarrollo de la funcionalidad.

    ```
    calculadora/
    │
    ├── calculadora.js
    ├── package.json
    └── README.md
    ```
- Implementa las funciones necesarias para realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división.
- Crea una función principal que reciba los números y la operación como argumentos de línea de comandos y ejecute la operación correspondiente.

3. Argumentos de línea de comandos.
- La calculadora deberá recibir los números y la operación directamente como argumentos al ejecutar el script desde la línea de comandos.
- Los argumentos deberán ser proporcionados de la siguiente manera: [número1] [operación] [número2].
- Por ejemplo: node calculadora.js 5 + 3.

### Argumentos de línea de comandos:

La calculadora deberá recibir los números y la operación directamente como argumentos al ejecutar el script desde la línea de comandos.

Los argumentos deberán ser proporcionados de la siguiente manera: [número1] [operación] [número2].
Por ejemplo, para sumar 5 y 3, puedes ejecutar el siguiente comando en tu terminal:

```
    node calculadora.js 5 + 3
```

En este ejemplo:

- node es el comando para ejecutar un script de Node.js.
- calculadora.js es el nombre del archivo de script que contiene la calculadora.
- 5, + y 3 son los argumentos que proporcionas a la calculadora para realizar la operación. En este caso, estás indicando que deseas sumar 5 y 3.

Recuerda separar cada argumento con un espacio y asegurarte de que la operación (+, -, * o /) esté rodeada de espacios para que sea reconocida correctamente por la calculadora.

4. Pruebas y depuración
- Realiza pruebas exhaustivas para garantizar que la calculadora funcione correctamente en diferentes escenarios.
- Utiliza mensajes de consola para proporcionar retroalimentación durante el desarrollo y la depuración del código.

5. Documentación y entrega.

- Documenta el proyecto de manera clara y concisa en el archivo **`README.md`**, incluyendo información sobre cómo instalar, configurar y utilizar la calculadora.
- Empaqueta el proyecto y entrégalo según las instrucciones proporcionadas por el instructor.

### Observaciones importantes

- Prioriza la simplicidad y la funcionalidad básica de la calculadora.
- Asegúrate de que la calculadora maneje correctamente los casos de números inválidos o divisiones por cero.
- Utiliza mensajes de consola claros y amigables para proporcionar instrucciones y resultados durante la ejecución del script.

Esta tarea te proporcionará una oportunidad para aplicar y reforzar los conceptos básicos de programación en Node.js mientras desarrollas una aplicación práctica y funcional. ¡Espero que la disfrutes!