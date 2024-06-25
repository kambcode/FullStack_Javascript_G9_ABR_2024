### Comandos Git

- `git init`: Inicializa un nuevo repositorio Git en el directorio actual.
- `git add .`: Agrega todos los archivos modificados y nuevos al área de preparación (staged changes).
- `git commit -m "Initial commit"`: Crea un nuevo commit con los cambios en el área de preparación y el mensaje especificado.
- `git remote add origin url_branch`: Asocia un alias ("origin") a la URL del repositorio remoto.
- `git push -u origin remote_branch`: Envía los commits locales al repositorio remoto en la rama especificada, estableciendo la conexión entre la rama local y remota. Si la rama no
esta creada, la bandera -u publicará la rama en el repositorio remoto.
- `git push origin remote_branch`: Envía los commits locales al repositorio remoto en la rama especificada.
- `git clone url_repository`: Clona un repositorio remoto en un nuevo directorio local.
- `git pull origin remote_branch`: Obtiene los cambios desde el repositorio remoto y los fusiona en la rama actual.