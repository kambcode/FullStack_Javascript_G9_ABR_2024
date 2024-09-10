## Tarea: Crear una API Básica con Express

### Objetivos

1. Crear un servidor HTTP utilizando la librería express de Node.js.
2. Implementar dos endpoints accesibles mediante el método GET.
3. Utilizar un array o un archivo .json como base de datos.

### Descripción de la tarea

1. Debes crear una pequeña API que gestione una lista de estudiantes. Tu API debe correr por el puerto `3002`

2. Usa la librería `express` de Node.js para crear el servidor.

3. La API debe tener dos endpoints:

    - `GET /students:` Este endpoint debe retornar la lista de todos los estudiantes en formato JSON.
    - `GET /students/:id` Este endpoint debe devolver los detalles de un estudiante específico basado en el ID. Si no se encuentra el estudiante, debe devolver un mensaje de error apropiado.

4. **Formato de datos:** Cada estudiante debe ser un objeto con las siguientes propiedades: `id` (número), `name` (string), `age` (número), y `major` (string). Los datos deben estar guardados en una variable, a continuación encontrarás un ejemplo de tu base de datos

    ```javascript
        const students = [
            { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
            { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
            { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
        ];
    ```

5. **Opcional**: Puedes usar un archivo .json como base de datos en lugar de crear una constante como la descrita en el paso 4. En este caso el archivo que debes usar debe ser como el siguiente:

    students.json

    ```json
        [
            { "id": 1, "name": "Alice", "age": 20, "major": "Computer Science" },
            { "id": 2, "name": "Bob", "age": 22, "major": "Mathematics" },
            { "id": 3, "name": "Charlie", "age": 21, "major": "Physics" }
        ]
    ```

6. Documenta y prueba tu API usando postman y envia la evidencia a el docente. Puedes agregar un archivo README.md a tu API para documentar como usarla y agregar los pantallazos de postman

### RETO: Ampliar la API con DELETE

Ampliar la API para que soporte eliminación de estudiantes utilizando el métodos HTTP DELETE. Para ello debes crear la siguiente ruta:

- `DELETE /students/:id`: Este endpoint debe permitir eliminar un estudiante específico basado en el ID proporcionado en la URL.

**IMPORTANTE** Si usaste un archivo JSON como base de datos debes usar la librería `fs` para sobreescribir el archivo una vez borres a un estudiante.