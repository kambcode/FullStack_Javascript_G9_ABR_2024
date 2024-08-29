## Tarea: Tu primer proyecto con NodeJS y NPM

Para esta tarea vamos a crear nuestro primero proyecto de NodeJS utilizando NPM para gestionar su creación y estructura, la tarea consiste en seguir los pasos dados hasta llegar al resultado esperado.

**1. Creación del directorio del proyecto:**

- Clona el repositorio de tareas proporcionado por el profesor
- Crea un nuevo directorio (carpeta) para tu proyecto cuyo nombre sea por ejemplo `tu-nombre-tarea-2`.
  
**2. Inicialización del proyecto con npm:**
- Inicializa tu proyecto Node.js ejecutando el siguiente comando en tu terminal dentro del directorio del proyecto:
```bash
npm init
```
- Estos son los datos que debes diligenciar cuando ejecutes el comando
  
    - Nombre del paquete: proyecto-tarea
    - Versión: 1.2.0
    - Descripción: Esta es la descripción del proyecto
    - Script de entrada: index.js
    - Palabras clave: tarea - actividad - estudio
    - Autor: Tu nombre
    - Licencia: Por defecto
- Esto creará un archivo package.json con la configuración predeterminada para tu proyecto.
- **Importante** Modifica el archivo  package.json para que contenga la línea `"type": "module"`, ejemplo:
  
```javascript

      // Este es solo un archivo de ejemplo, el tuyo será  diferente
      {
          "name": "demo",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "",
          "license": "ISC",
          "type": "module"
        }
```

**3. Instalación de las librería nodemon:**
- Instalamos el paquete `nodemon` como dependencia de desarrollo (Nodemon es un paquete que nos sirve para escuchar cuando nuestro proyecto cambia, es decir, cuando guardamos cambios y corre el código dado automaticamente)
  
```bash
npm install nodemon
```

- Genera el comando `watch` en la configuración del proyecto para ejecutar `nodemon index.js`
    
```javascript
  "scripts": {
    "start": "node index.js",
    "watch": "nodemon index.js"
  },
```
 
**4. Instalación de las librería chance:**
- Instala el paquete `chance` cuya documentación puedes encontrar [aquí](https://chancejs.com/) como dependencia
  
```bash
npm install chance
```

**5. Creacion de el archivo `index.js`**
- Hasta aquí tenemos listas las dependencias de nuestro proyecto, ahora vamos a implementar todas estas dependencias, lo que buscamos es crear un programa que genere datos aleatorios, como un nombre, un email, una fecha y un número. Por ejemplo puedes ver el siguienete

```javascript
    // index.js
    import Chance from 'chance';
    
    const chance = new Chance();
    
    // Generar datos aleatorios
    const nombre = chance.name();
    const correo = chance.email();
    const fechaNacimiento = chance.birthday();
    const telefono = chance.phone();
    
    // Imprimir los datos aleatorios generados
    console.log("Datos aleatorios generados:");
    console.log("Nombre:", nombre);
    console.log("Correo electrónico:", correo);
    console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
    console.log("Teléfono:", telefono);
```

**6. Ejecución del script:**

- Para ejecutar el script, simplemente escribe el siguiente comando en tu terminal dentro del directorio del proyecto:
```bash
npm run watch
```
El script generará datos aleatorios y los mostrará en la consola. Además, nodemon reiniciará automáticamente el servidor cuando se realicen cambios en el archivo `index.js`.

