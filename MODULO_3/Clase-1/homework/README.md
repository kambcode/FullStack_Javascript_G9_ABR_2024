# Tarea 1: Uso de comandos Git

### Objetivo:

Practicar el uso básico de Git para crear un repositorio, subir un proyecto existente y compartir un enlace a un archivo en línea.

### Pasos a seguir:

**1. Crear un repositorio en GitHub:**

  - Ve a GitHub y asegúrate de tener una cuenta.
  - Haz clic en el botón "New" en la esquina superior derecha de tu panel de control.
  - Asigna un nombre a tu repositorio.
  - Opcionalmente, puedes agregar una descripción.
  - Marca la casilla **"Initialize this repository with a README"** (o "Inicializar este repositorio con un archivo README").
  - Haz clic en el botón "Create repository".

**2. Clonar el repositorio en tu computadora:**

  - Abre tu terminal (en Windows puedes usar Git Bash) y navega al directorio donde quieres clonar el repositorio utilizando el comando cd. O puedes abrir la terminal directamente desde visual studio.
  - Copia la URL del repositorio que acabas de crear en GitHub.
  - Ejecuta el siguiente comando en tu terminal:
  ```
  git clone <URL_del_repositorio>
  ```
  - Esto creará una copia local del repositorio en tu computadora.

**3. Agregar y modificar archivos:**

  - Ve al directorio recién creado con cd <nombre_del_repositorio>.
  - Agrega archivos al repositorio o modifica el archivo README.md si lo deseas.

**4. Hacer commit de los cambios:**

  - Agrega los archivos modificados para prepararlos para el commit utilizando el comando `git add .` para agregar todos los archivos.
  - Confirma los cambios utilizando el comando `git commit -m "Mensaje de commit descriptivo aquí"`. Reemplaza "Mensaje de commit descriptivo aquí" con un mensaje que describa los cambios que estás confirmando.

**5. Hacer push de los cambios al repositorio en GitHub:**

  - Una vez que hayas hecho commit de tus cambios, puedes subirlos al repositorio remoto en GitHub utilizando el comando `git push origin main`. Esto enviará tus cambios al branch "main" del repositorio remoto. Si estás utilizando un branch diferente, reemplaza "main" con el nombre de tu branch.
  - Si es la primera vez que haces push desde tu computadora, es posible que se te pida que ingreses tus credenciales de GitHub.
¡Y eso es todo! Ahora has creado tu primer repositorio en GitHub, clonado en tu computadora, realizado cambios, confirmado esos cambios y subido esos cambios de vuelta al repositorio en GitHub.

**6. Entrega:**
 
  - Comparte el enlace del repositorio con tu instructor/a para su revisión.