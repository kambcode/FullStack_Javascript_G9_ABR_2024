# Guía de Uso de Vercel

## ¿Qué es Vercel?

Vercel es una plataforma de despliegue y hosting para aplicaciones web front-end y serverless functions. Está diseñada para ser rápida y fácil de usar, permitiendo a los desarrolladores desplegar sus aplicaciones con un solo comando.

## ¿Para qué se usa Vercel?

Vercel se utiliza principalmente para:

- Desplegar aplicaciones web estáticas y dinámicas.
- Alojamiento de aplicaciones front-end hechas con frameworks como React, Next.js, Vue.js y Svelte.
- Implementación de serverless functions para manejar tareas del lado del servidor sin necesidad de administrar servidores completos.
- Obtener una URL personalizada y gratuita para tu aplicación, con HTTPS incluido.

## ¿Cómo desplegar una aplicación de React en Vercel?

### Prerequisitos

- Tener Node.js y npm (Node Package Manager) instalados en tu máquina.
- Tener una cuenta en Vercel. Si no tienes una, puedes registrarte en [Vercel](https://vercel.com/signup).

### Paso a Paso

1. **Crear una aplicación de React** (si no tienes una ya creada):

   ```bash
   npx create-react-app my-app
   cd my-app
   ```

2. **Inicializar un repositorio de Git** (si no lo tienes ya):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Subir tu proyecto a GitHub** (o a otro servicio de repositorio git):

   ```bash
   git remote add origin <URL_DE_TU_REPOSITORIO>
   git push -u origin main
   ```

4. **Desplegar en Vercel**:

   - Ve a [Vercel](https://vercel.com) y haz login.
   - En el tablero de Vercel, haz clic en `New Project` y luego en `Import Git Repository`.
   - Conecta tu cuenta de GitHub (o GitLab/Bitbucket) y selecciona el repositorio de tu proyecto React.
   - Vercel detectará automáticamente que es una aplicación de React y propondrá la configuración predeterminada para React. Haz clic en `Deploy`.

5. **Ver el resultado**:

   - Una vez completado el despliegue, Vercel te proporcionará una URL donde puedes ver tu aplicación en funcionamiento.
   - Cada vez que hagas un push a la rama principal (main) de tu repositorio, Vercel automáticamente redeployará tu aplicación con los cambios.

### Comandos útiles de Vercel

- **Instalar la CLI de Vercel**:
  
  ```bash
  npm install -g vercel
  ```

- **Desplegar manualmente usando la CLI**:

  Desde el directorio raíz de tu proyecto:

  ```bash
  vercel
  ```

  Sigue las instrucciones en pantalla para completar el despliegue.

- **Ver los despliegues activos**:

  ```bash
  vercel ls
  ```

- **Eliminar un despliegue**:

  ```bash
  vercel remove <nombre_del_proyecto>
  ```

## Recursos Adicionales

- [Documentación Oficial de Vercel](https://vercel.com/docs)
- [Guía de Create React App](https://create-react-app.dev/docs/getting-started/)
- [Ejemplos de Proyectos en Vercel](https://vercel.com/templates)

¡Y eso es todo! Ahora tienes una guía completa sobre cómo usar Vercel para desplegar tu aplicación de React.
