# Clase 7: Integración de API con Express y SQL usando Sequelize

## Introducción

### ¿Qué es un ORM?

ORM significa "Object-Relational Mapping" (Mapeo Objeto-Relacional). Es una técnica que permite interactuar con una base de datos relacional utilizando el paradigma de programación orientada a objetos. En lugar de escribir consultas SQL directamente, los ORMs proporcionan una forma de trabajar con la base de datos a través de objetos y métodos de una manera más intuitiva y estructurada.

### ¿Por qué usar un ORM?

1. **Abstracción**: Los ORMs ocultan la complejidad del SQL y la interacción con la base de datos, facilitando el desarrollo.
2. **Mantenimiento**: El código es más fácil de mantener y leer, ya que se trabaja con objetos y métodos en lugar de consultas SQL crudas.
3. **Productividad**: Aumenta la productividad al reducir la cantidad de código necesario para realizar operaciones CRUD (Create, Read, Update, Delete).
4. **Portabilidad**: Facilita la migración entre diferentes sistemas de bases de datos.

### ORMs Conocidos

- **Sequelize**: Popular en el ecosistema de Node.js para trabajar con bases de datos SQL.
- **TypeORM**: Otro ORM para Node.js que soporta múltiples bases de datos.
- **Doctrine**: Un ORM para PHP.
- **Hibernate**: Un ORM ampliamente utilizado en Java.

### ¿Por qué vamos a ver Sequelize?

Sequelize es un ORM para Node.js que soporta bases de datos SQL como PostgreSQL, MySQL, SQLite y MSSQL. Es popular debido a su simplicidad y flexibilidad. En esta clase, utilizaremos Sequelize para integrar una base de datos PostgreSQL con nuestra API creada con Express.

## Configuración e Instalación de Sequelize

### Instalación

1. **Instalar Sequelize y PostgreSQL en el proyecto:**

    ```sh
    npm install sequelize pg pg-hstore
    ```

2. **Configurar la conexión a la base de datos en `config/config.json`:**

    ```json
    {
      "development": {
        "username": "your_username",
        "password": "your_password",
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "postgres"
      },
      "test": {
        "username": "your_username",
        "password": "your_password",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
      },
      "production": {
        "username": "your_username",
        "password": "your_password",
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
      }
    }
    ```

### Conexión y Creación de la Base de Datos

#### Configuración de la Conexión

Configurar la conexión a la base de datos en el archivo `db.js`:

```js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_development', 'your_username', 'your_password', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

export default sequelize;
```

### Definición de la API

#### Configuración de Express

```js
import express from 'express';
import sequelize from './db.js';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

### Creación de la Base de Datos y Tablas

Para que los estudiantes vean la continuidad de lo aprendido, vamos a crear las tablas utilizando Sequelize como query builder.

```js
sequelize.query(`
  CREATE TABLE IF NOT EXISTS Movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(50),
    releaseYear INT
  );
`).then(() => console.log('Movies table created'))
  .catch(err => console.error('Error creating Movies table:', err));

sequelize.query(`
  CREATE TABLE IF NOT EXISTS Directors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    nationality VARCHAR(50)
  );
`).then(() => console.log('Directors table created'))
  .catch(err => console.error('Error creating Directors table:', err));
```

### Rutas de la API

#### Insertar Datos

```js
app.post('/movies', async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  try {
    const result = await sequelize.query(`
      INSERT INTO Movies (title, genre, releaseYear)
      VALUES (:title, :genre, :releaseYear)
      RETURNING *;
    `, {
      replacements: { title, genre, releaseYear },
      type: sequelize.QueryTypes.INSERT
    });
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

#### Seleccionar Datos

```js
app.get('/movies', async (req, res) => {
  try {
    const movies = await sequelize.query(`
      SELECT * FROM Movies;
    `, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

#### Actualizar Datos

```js
app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { title, genre, releaseYear } = req.body;
  try {
    const result = await sequelize.query(`
      UPDATE Movies
      SET title = :title, genre = :genre, releaseYear = :releaseYear
      WHERE id = :id
      RETURNING *;
    `, {
      replacements: { id, title, genre, releaseYear },
      type: sequelize.QueryTypes.UPDATE
    });
    res.json(result[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

#### Eliminar Datos

```js
app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await sequelize.query(`
      DELETE FROM Movies
      WHERE id = :id;
    `, {
      replacements: { id },
      type: sequelize.QueryTypes.DELETE
    });
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### Conclusión

Al utilizar Sequelize como query builder inicialmente, los estudiantes podrán ver la continuidad de su aprendizaje de SQL mientras se familiarizan con Sequelize. A medida que avancen, se pueden introducir los modelos y métodos ORM completos para proporcionar una experiencia de desarrollo más eficiente y escalable.
