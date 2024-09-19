# Tarea: Generación de decomendaciones de Cursos Adicionales usando AI

## Descripción

En esta tarea, vas a crear un endpoint que recomiende cursos adicionales basados en la carrera (`major`) del estudiante utilizando la API de OpenAI.

## Prerrequisitos

Antes de comenzar con la tarea, asegúrate de tener los siguientes prerrequisitos:

1. **API Key de OpenAI**: Debes tener una cuenta en [OpenAI](https://beta.openai.com/signup/) y obtener una API key.
2. **Proyecto Node.js Configurado**: Tu proyecto debe estar configurado con Node.js y tener los endpoints CRUD básicos para estudiantes.
3. **Archivo .env**: Crea un archivo `.env` en la raíz de tu proyecto y agrega tu API key de OpenAI:
   ```
   OPENAI_API_KEY=tu_api_key_aqui
   ```

## Instrucciones

### Paso 1: Crear un Nuevo Endpoint

Crea un nuevo endpoint `POST /students/:id/recommend-courses` que tome el ID del estudiante. Este endpoint debe:

1. Obtener los detalles del estudiante por ID.
2. Usar la API de OpenAI para generar una lista de cursos recomendados basados en la carrera del estudiante.
3. Devolver las recomendaciones en la respuesta.

### Paso 2: Obtener los Detalles del Estudiante

En el controlador del nuevo endpoint, obtén los detalles del estudiante usando el ID proporcionado en la URL. Aquí hay un ejemplo de cómo podrías obtener estos detalles:

```javascript
let students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    // Otros estudiantes...
];

app.post('/students/:id/recommend-courses', async (req, res) => {
    const { id } = req.params;
    // TODO: valdia si el ID de el estudainte existe, si es asì debes retornar las
    // recomendaciones de cursos generados por openAI. 
    
    // Si el estudiante no existe retorna un error 400.
    // Ejemplo:
    // res.status(404).send('Estudiante no encontrado');
    
});
```

### Paso 3: Llamar a la API de OpenAI

Usa `axios` para hacer una petición a la API de OpenAI. Asegúrate de tener configurado tu entorno para usar la clave de API almacenada en un archivo `.env`.

Aquí tienes un ejemplo del prompt que podrías usar para generar las recomendaciones de cursos:

```javascript
const prompt = `Recomienda cursos adicionales para un estudiante de ${student.major}.`;
```
Este prompt se enviará a la API de OpenAI para generar las recomendaciones.

### Paso 4: Devolver las Recomendaciones de Cursos

Si la llamada a la API de OpenAI es exitosa, devuelve las recomendaciones generadas en la respuesta JSON:

```javascript
res.json({ recommendations: response.data.choices[0].text.trim() });
```

### Consideraciones Finales

1. Asegúrate de manejar los errores adecuadamente.
2. Valida que los datos de entrada sean correctos.
3. Prueba el endpoint con diferentes estudiantes para ver las recomendaciones generadas.

## Ejemplo de Prueba

Usa herramientas como Postman para probar el endpoint `POST /students/1/recommend-courses`. Deberías recibir una respuesta con una lista de cursos recomendados, por ejemplo:

```json
{
    "recommendations": "Te recomiendo los siguientes cursos: 1. Algoritmos Avanzados, 2. Desarrollo de Aplicaciones Móviles, 3. Seguridad Informática."
}
```

## Conclusión

Esta tarea te ayudará a integrar la API de OpenAI en tu proyecto existente, añadiendo una funcionalidad interesante que aprovecha el poder de la inteligencia artificial para generar recomendaciones personalizadas basadas en los intereses académicos de los estudiantes.
