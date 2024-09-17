# Tarea: Incluir middlewares a tu API con express

## Parte 1. Implementación de Middleware de Autorización

### Objetivos

El objetivo de esta tarea es que implementes un middleware de autorización en tu API de estudiantes. Este middleware debe verificar que un token de autorización específico esté presente en los headers de la solicitud para permitir las operaciones de escritura (POST, PUT, DELETE). Si el token no está presente o es incorrecto, la solicitud debe ser rechazada con un código de estado 403 (Forbidden).

### Descripción de la tarea

1. Crea un middleware de autorización:

    - El middleware debe verificar la presencia de un header `Authorization` en la solicitud.
    - El token de autorización esperado debe ser `Bearer mysecrettoken`.
    - Si el token está presente y es correcto, el middleware debe permitir que la solicitud continúe.
    - Si el token no está presente o es incorrecto, el middleware debe responder con un código de estado 403 y un mensaje de error.

  
2. Aplica el middleware a las rutas de escritura:

    - Aplica el middleware en las rutas POST, PUT y DELETE de tu API de estudiantes. Por ejemplo, supongamos que tu middleware se llama `authMiddleware`, lo debes implementar de la siguiente forma:

        ```javascript
        // ./middlewares/authMiddleware.js
        const authMiddleware = (req, res, next) => {
            // Implementa la lógica de tu middleware
        }

        export default authMiddleware;
        ```

        ```javascript 
        // main.js
        import {authMiddleware} from './middlewares/authMiddleware.js';
        
        app.post('/students', authMiddleware, (req, res) => {
            // Implementa la lógica de tu endpoint
        });
        ```

3. Prueba tu implementación:

    - **Con token correcto:** Realiza una petición POST, PUT o DELETE con el header `Authorization: Bearer mysecrettoken` y verifica que la solicitud sea exitosa.
    - **Sin token o con token incorrecto:** Realiza una petición POST, PUT o DELETE sin el header `Authorization` o con un token incorrecto y verifica que la solicitud sea rechazada con un código de estado 403 y un mensaje de error.
    - **Rutas de lectura:** Realiza una petición GET y verifica que la solicitud sea exitosa sin necesidad del token.


## Parte 2. Implementación de un Middleware de Validación

### Objetivo 
El objetivo de esta tarea es que implementes un middleware de validación en tu API de estudiantes. Este middleware debe verificar que los datos proporcionados en las solicitudes POST y PUT sean válidos antes de permitir que la solicitud continúe.

### Descripción de la tarea

1. Crea un middleware de validación:

    - Implementa el middleware para validar que los datos del estudiante cumplan con los siguientes criterios:
        - **name:** cadena de texto (obligatorio, no vacío).
        - **age:** número (obligatorio, mayor o igual a 0).
        - **major:** cadena de texto (obligatorio, no vacío).
    - Si alguno de los campos no cumple la validación, tu middleware debe retornar un codigo de estado 400 y un mensaje indicando el error, ejemplo:
        - Invalid name. Name must be a non-empty string.
        - Invalid age. Age must be a non-negative number.

2. Aplica el middleware a las rutas POST y PUT:

    - Aplica el middleware solo a las rutas de creación (POST /students) y actualización (PUT /students/:id).

        ```javascript 
        import {authMiddleware} from './middlewares/authMiddleware.js';
        import {validationMiddleware} from './middlewares/validationMiddleware.js';
        // ...
        app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
            // Implementa la lógica de tu endpoint
        });
        ```

3. Prueba tu implementación:

    - Realiza solicitudes POST y PUT con datos válidos e inválidos y verifica que las solicitudes inválidas sean rechazadas con un código de estado 400 (Bad Request) y un mensaje de error descriptivo.


