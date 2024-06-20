# Tarea 2: Colaboración en Repositorio Git

### Pre-requisitos:

Para poder interactuar con repositorios remotos bien sean nuestros o no, muchas veces Github nos pide autentificarnos por lo que es necesario hacer una autenticacion por token (esto sustituirá la contraseña). Para crear un token de acceso personal en GitHub, sigue estos pasos:
1. Ve a Configuración (Settings) en tu cuenta de GitHub.
2. En el menú de la izquierda, selecciona Developer settings (ultima opcion).
3. Luego, selecciona Personal access tokens.
4. Haz clic en Generate new token (classic).
5. Especifica el nombre del token y selecciona los permisos necesarios, que para nuestro caso sera el checkbox "repo". 
6. Haz clic en Generate token y copia el token generado, ya que sólo se mostrará una vez


El segundo pre-requisito es que configures tu nombre de usuario y email en git de forma global. Para ello en la terminal de tu PC escribe los siguientes comandos (Recuerda reemplazar tu nombre y tu email)
```bash
 git config --global user.name "Tu nombre va acá"
 git config --global user.email tuemail@example.com
```

### Objetivo:

Practicar el manejo básico de Git y la colaboración en un proyecto compartido.

1. **Clonar el repositorio:** Vamos a clonar el repositorio colaborativo para todo el grupo:

```
git clone URL_REPOSITORIO_GIT
```
   **IMPORTANTE** Es posible que al clonar el repositorio git te pida tu usuario y contraseña, recuerda que en este caso el valor de la contraseña debe ser el token personal que creaste en los pre-requisitos
 
2. **Crear una nueva rama:** Una vez que hayas clonado el repositorio, crea una nueva rama llamada utilzando tu nombre nombre-apellido-documento para trabajar en ella.
```
git checkout -b nombre-apellido-112234
``` 

3. **Agregando nuevos archivos a tu rama:** En tu rama debes crear una carpeta siguiendo lo siguiente estructura NOMBRE_APELLIDO_DOC_IDENTIDAD (recuerda evitar el uso de espacios y caracteres especiales como puntos y comas). En la carpeta que acabas de crear debes agregar un archivo README.md en donde deberás explicar que son las estructuras de control en programación y cuales se pueden usar en javascript. 

4. **Verificar los cambios:** Verifica el estado de los cambios utilizando el comando git status.

5. **Agregar y confirmar los cambios:** Agrega tus cambios al área de preparación (``` git add . ```) y crea un commit con los cambios en la nueva rama.

```
git add .
git commit -m "Agregada nueva funcionalidad"
```

6. **Sincronizar la nueva rama con el repositorio remoto:** Finalmente, sincriniza la nueva rama y los cambios realizados con el repositorio remoto.

```
git push -u origin nombre-de-tu-rama
```

7. **Crear un PR (Opcional)** Crea un Pull request (PR) de tu rama para integrarse con la rama principal (main) y comparte el link de tu Pull request con tus compañeros y docente por el chat de whatsapp