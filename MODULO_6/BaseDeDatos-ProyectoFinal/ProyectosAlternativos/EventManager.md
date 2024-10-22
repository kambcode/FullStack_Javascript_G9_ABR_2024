# Proyecto Final: API y Frontend de Gestión de Eventos

## Descripción del Proyecto

En este proyecto final, deberás desarrollar una aplicación web para gestionar eventos y asistentes. Utilizarás Express y Sequelize para la API y React para el frontend. La aplicación debe permitir a los usuarios gestionar eventos, registrar asistentes y realizar seguimiento de la asistencia. 

## Descripción del Diseño

### Diseño de la Interfaz

La interfaz de usuario debe ser intuitiva y permitir a los usuarios realizar las siguientes acciones:

1. **Ver la lista de eventos**: Mostrar una lista de todos los eventos con su nombre, fecha y descripción.
2. **Ver la lista de asistentes**: Mostrar una lista de asistentes con su nombre y eventos a los que están registrados.
3. **Buscar y filtrar**: Permitir a los usuarios buscar eventos por nombre y filtrar por fecha.
4. **Detalles del evento**: Al seleccionar un evento, mostrar detalles completos del evento, incluyendo la lista de asistentes registrados.
5. **Detalles del asistente**: Al seleccionar un asistente, mostrar detalles completos del asistente, incluyendo los eventos a los que está registrado.
6. **Agregar, editar y eliminar**: Permitir la adición, edición y eliminación de eventos y asistentes a través de formularios adecuados.

### Estilo

El diseño debe ser limpio y moderno, con un enfoque en la usabilidad. Los colores y la disposición de los elementos deben ser claros y ayudar a una navegación intuitiva.

## Requisitos del Proyecto

1. **API**:
   - Debe estar implementada utilizando Express y Sequelize.
   - Debe permitir CRUD completo para las entidades `Event` y `Attendee`.
   - **Endpoints Requeridos**:
     - **Eventos**:
       - **GET /events**: Obtener todos los eventos.
       - **GET /events/:id**: Obtener un evento por ID.
       - **POST /events**: Crear un nuevo evento.
       - **PUT /events/:id**: Actualizar un evento por ID.
       - **DELETE /events/:id**: Eliminar un evento por ID.
     - **Asistentes**:
       - **GET /attendees**: Obtener todos los asistentes.
       - **GET /attendees/:id**: Obtener un asistente por ID.
       - **POST /attendees**: Crear un nuevo asistente.
       - **PUT /attendees/:id**: Actualizar un asistente por ID.
       - **DELETE /attendees/:id**: Eliminar un asistente por ID.
       - **GET /attendees/events/:eventId**: Obtener todos los asistentes registrados en un evento específico.

2. **Frontend**:
   - Debe estar desarrollado utilizando React.
   - Debe interactuar con la API para realizar operaciones CRUD.
   - Debe permitir a los usuarios ver, agregar, editar y eliminar eventos y asistentes.
   - Debe incluir un diseño claro y responsivo.

## Entidades y Atributos

### Eventos
- **id**: Número entero, identificador único del evento.
- **name**: Cadena de caracteres, nombre del evento.
- **description**: Texto largo, descripción del evento.
- **date**: Fecha, fecha del evento.
- **location**: Cadena de caracteres, ubicación del evento.

### Asistentes
- **id**: Número entero, identificador único del asistente.
- **name**: Cadena de caracteres, nombre del asistente.
- **email**: Cadena de caracteres, correo electrónico del asistente.
- **registeredAt**: Fecha, fecha de registro del asistente en la base de datos.

## Datos de Ejemplo

### Eventos

| id | name                | description                      | date       | location      |
|----|---------------------|----------------------------------|------------|---------------|
| 1  | Music Festival      | A grand music festival.          | 2024-09-15 | Central Park  |
| 2  | Tech Conference     | A conference on tech innovations.| 2024-10-05 | Convention Center |
| 3  | Art Exhibition      | An exhibition of modern art.      | 2024-11-20 | Art Gallery   |

### Asistentes

| id | name            | email                | registeredAt |
|----|-----------------|----------------------|--------------|
| 1  | Alice Johnson   | alice@example.com    | 2024-08-10   |
| 2  | Bob Smith       | bob@example.com      | 2024-08-12   |
| 3  | Carol White     | carol@example.com    | 2024-08-15   |
| 4  | David Brown     | david@example.com    | 2024-08-18   |
| 5  | Emma Davis      | emma@example.com     | 2024-08-20   |

## Entregables

1. Código fuente del backend y frontend.
2. Documentación de la API (puede ser generada automáticamente o escrita a mano).
3. Instrucciones para ejecutar la aplicación (backend y frontend).
4. Un archivo `.sql` con las sentencias SQL usadas para crear la base de datos y poblar la misma
5. Capturas de pantalla o una demostración en vivo de la aplicación.
