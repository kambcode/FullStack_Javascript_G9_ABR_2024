# Tarea: Crear un proyecto de React con configuración básica y mostrar información sobre tu artista/personaje favorito

### Explicación:
Esta tarea tiene como objetivo ayudarte a familiarizarte con la configuración inicial de un proyecto de React y la creación de un componente simple para mostrar información estática sobre tu tu artista/personaje favorito. A través de esta tarea, podrás entender cómo se estructura un proyecto básico de React y cómo se utiliza un componente funcional para renderizar contenido en la interfaz de usuario.

### Pasos a seguir:

1. Configuración del entorno de desarrollo:

    - Asegúrate de tener Node.js instalado en tu sistema.
    - Abre tu terminal y crea un nuevo directorio para el proyecto.
    - Navega hasta el directorio del proyecto en la terminal.

2. Creación del proyecto de React:

Para las personas que no tengas instalado "VITE"
Posicionar primero en el directorio y abrir la terminal con la direccion del directorio

Por favor ejecutar este comando en la terminal
"npm i vite"

Ejecuta el siguiente comando en la terminal para crear un nuevo proyecto de React:

```bash
npm create vite@latest
```

sigue las instrucciones de vite.

3. Navegación al proyecto:

Después de crear el proyecto, navega al directorio del proyecto utilizando el comando:

```bash
cd nombre-del-proyecto
```

4. Modificación del archivo App.jsx:

Abre el archivo App.jsx ubicado en la carpeta src con tu editor de código preferido.
Elimina todo el contenido dentro del componente App.
Agrega el siguiente código para mostrar el título, una foto y una pequeña de tu artista/personaje favorito:

```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Artista/personaje Favorito</h1>
      <img src="" alt="Foto personaje" />
      <p>
        Breve  descripción del personaje.
        Puedes incluir detalles como su nombre, género, si está vivo o no, etc.
      </p>
    </div>
  );
}

export default App;
```

5. Ejecución del proyecto:

Guarda los cambios realizados en el archivo App.js.
Ejecuta el proyecto de React utilizando el siguiente comando en la terminal:
```bash
npm run dev
```
Esto iniciará el servidor de desarrollo y abrirá automáticamente tu navegador predeterminado en la dirección http://localhost:5173, donde podrás ver tu aplicación de React en funcionamiento.

¡Con estos pasos, habrás creado un proyecto de React básico y mostrado información sobre tu artista/personaje favorito en la interfaz de usuario! Este es un buen punto de partida para familiarizarte con el desarrollo de aplicaciones web utilizando React.