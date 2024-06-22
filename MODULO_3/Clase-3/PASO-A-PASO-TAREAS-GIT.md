# PASO A PASO PARA SUBIR LAS TAREAS USANDO GIT

El objetivo de este archivo es dejar claro cuales son los pasos necesarios para la entrega de tareas a través de git. Antes de especificarlos es conveniente recalcar que por cada tarea se debera crear una rama, tratando de imitar el modo de trabajo en el mundo laboral real. Los pasos a seguir son:

1. Debemos estar parados en la rama main `git checkout main`
2. Una vez parados en la rama main, debemos actualizar el repositorio con un `git pull`
3. Con el repositorio ya actualizado debemos crear una rama nueva, donde haremos la tarea, con el comando `git checkout -b nombre-apellido-celular-tarea-n`
4. Cuando la tarea este completa se debe subir al repositorio con `git add .`, `git commit -m "mensaje explicativo de lo que se hizo"` y `git push -u origin nombre_rama`
5. Desde Github se deberá crear un pull request para que el profesor pueda revisar la tarea.

Notas:
- Si el profesor corrige algo del pull request, se debe ir a la rama con el que se creo el pull request y ahí hacer el cambio. Además no será necesario crear otro pull request asi se corrija muchas veces la tarea.
- Después de que la rama exista en github gracias al comando `git push -u origin nombre_rama`, bastará con ejecutar solamente el comando `git push` para futuros cambios en la rama.
- Para creación o modificación de archivos (que no incluyan cambios de carpetas) se puede usar el comando `git commit -am "mensaje"` que hará el trabajo de `git add .` y `git commit -m "mensaje"` juntos.

## Escenarios que pueden ocurrir

Es claro que git es una de las herramientas mas poderosas en el mundo de la programación, pero tambien es cierto que según los estándares que hay para trabajar con ésta herramienta podemos llegar a cometer algun error subiendo algun archivo que no debia subirse o en la rama equivocada.

1. Subí la tarea 3, el profe me mandó a corregir algo pero yo ya estaba en la tarea 4 y se me fue un archivo de la tarea 4 en la rama de la tarea 3: 
    - Primero que todo lo que se deberia hacer es un `git checkout rama-tarea-3` para corregir lo que se tenga que corregir en la rama que es (la que se creó con el PR).
    - Ahora suele suceder que en esos casos se sube un archivo de la tarea siguiente (cosa que no debe suceder).
    - Una vez subidos los cambios (con la corrección y el archivo incorrecto) se deberá ejecutar un `git log main..rama --oneline | cat` para obtener el id del commit al que quieres volver. Recuerda que con éste comando puedes ver el historial de commits en tu rama.
    - Despues se ejecuta un `git reset id_commit`, se agregan al área de staging los cambios que deben ir en la tarea y se dejan en local los cambios que NO deben ir en la rama tarea-3 y se suben los cambios a la rama .
    - Sin por alguna razón git no permite hacer un `git push` al final de éste paso porque dice que primero se debe actualizar con un `git pull`, lo que se deberá hacer es ejecutar un `git push -f` para forzar la subida de cambios.

2. Por otro lado podriamos usar un `git revert --no-commit id_commit` para revertir el cambio que hicimos al subir un archivo donde no debía. Esto te devolera en el tiempo justo antes de subir los cambios (al igual que el `git reset`) y te dejará los archivos en el area de staging donde se podrá decidir que archivos enviar al commit y que archivos dejar en el área de cambios locales. Una vez se decida ésto bastará con ejecutar un `git revert --continue`.

3. Para evitar todo esto lo mejor es hacer uso del comando `git stash -u -m "mensaje relacionado a los cambios"` que permite tener una copia permanente de una modificación en específico que no se quiere poner en peligro durante el proceso de actualizacion (`git pull`), subida de cambios (`git push`) o algun retroceso en el tiempo (`git reset` o `git revert`) que nos haga perder todo el avance que se tenía sobre esos archivos. Una vez se guarden desaparecerán del área de cambios y se podrá efectuar cualquier acción sobre el repositorio sin temor a perder estos archivos. Al final para recuperarlos basta con ejectuar un `git stash apply id_stash`, donde el id_stash se puede ver con el comando `git stash list | cat` (suele ser algo como stash@{0} donde cero es lo último que guardaste).
