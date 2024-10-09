# Tarea: Repaso de Creación de API REST con Express para Gestión de Productos

## Objetivo
El objetivo de esta tarea es repasar los conceptos de creación de una API REST con Express, utilizando arrays en memoria para almacenar información. Los estudiantes deben aplicar los conocimientos adquiridos en módulos anteriores para crear una API completa con rutas para operaciones CRUD para gestionar productos.

## Descripción de la Tarea
Los estudiantes deben crear una API REST para gestionar una lista de productos. La API debe permitir realizar las siguientes operaciones:
- Obtener la lista de productos.
- Obtener un producto por su ID.
- Agregar un nuevo producto.
- Actualizar un producto existente.
- Eliminar un producto.

## Propiedades de los Productos
Cada producto debe tener las siguientes propiedades:
- `id` (number): Identificador único del producto.
- `name` (string): Nombre del producto.
- `price` (number): Precio del producto.
- `category` (string): Categoría a la que pertenece el producto.
- `description` (string): Descripción del producto.

## Criterios de Aceptación
1. **Estructura del Proyecto**:
    - El proyecto debe estar estructurado de manera adecuada con carpetas y archivos organizados.
    - Debe incluir un archivo `package.json` con las dependencias necesarias (Express).

2. **Rutas de la API**:
    - **GET /products**: Devuelve la lista de todos los productos.
    - **GET /products/:id**: Devuelve un producto específico por su ID.
    - **POST /products**: Agrega un nuevo producto. Debe aceptar un objeto JSON con los campos `name`, `price`, `category`, y `description`.
    - **PUT /products/:id**: Actualiza un producto existente por su ID. Debe aceptar un objeto JSON con los campos `name`, `price`, `category`, y `description`.
    - **DELETE /products/:id**: Elimina un producto por su ID.

3. **Manejo de Errores**:
    - La API debe manejar adecuadamente los errores, devolviendo los códigos de estado HTTP apropiados (por ejemplo, `404` para producto no encontrado, `400` para solicitudes inválidas).

4. **Validaciones (Opcional)**:
    - Al agregar o actualizar un producto, se deben validar los campos `name` (no vacío), `price` (número mayor a 0), `category` (no vacío) y `description` (no vacío).

5. **Persistencia en Memoria**:
    - Los productos deben almacenarse en un array en memoria. Al reiniciar el servidor, los datos se perderán.

6. **Ejemplo de Datos**:
    - Utilizar datos de ejemplo para probar la API, como se muestra a continuación:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 1000,
    "category": "Electronics",
    "description": "A high performance laptop"
  },
  {
    "id": 2,
    "name": "Coffee Mug",
    "price": 10,
    "category": "Kitchenware",
    "description": "A ceramic coffee mug"
  }
]
```

## Instrucciones
1. **Configuración del Proyecto**:
    - Crear un nuevo proyecto de Node.js.
    - Instalar Express utilizando `npm install express`.
    - Configurar el servidor Express.

2. **Implementación de Rutas**:
    - Implementar las rutas necesarias para las operaciones CRUD.
    - Utilizar el array en memoria para almacenar los productos.

3. **Pruebas de la API**:
    - Probar la API utilizando herramientas como Postman o curl para asegurarse de que todas las rutas funcionan correctamente y cumplen con los criterios de aceptación.

4. **Entrega**:
    - Subir el proyecto a un repositorio de GitHub.
    - Proporcionar un archivo README.md con instrucciones claras sobre cómo ejecutar el proyecto y probar la API.
