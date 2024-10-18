# Clase 8: Introducción a Sequelize y la Creación de Modelos

## ¿Qué es Sequelize?

Sequelize es un ORM para Node.js que soporta varias bases de datos SQL como PostgreSQL, MySQL, SQLite y MSSQL. Sequelize proporciona una forma de manejar las bases de datos utilizando JavaScript, simplificando el proceso de creación, lectura, actualización y eliminación (CRUD) de datos.

## Creación de Modelos

En Sequelize, los modelos representan las tablas de la base de datos. Cada modelo es una clase que define una estructura de tabla. A continuación, se explica cómo se crean y configuran los modelos.

### Definición de Modelos

Para definir un modelo, se utiliza el método `define` de Sequelize. Aquí está el ejemplo con los modelos `User` y `Post`:

```javascript
import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
});

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

export { User, Post };
```

### Tipos de Datos (`DataTypes`)

Sequelize proporciona una variedad de tipos de datos que pueden ser utilizados para definir los atributos de los modelos. Aquí hay una lista de algunos de los tipos de datos más comunes:

- `STRING`: Texto de longitud variable.
- `TEXT`: Texto largo.
- `INTEGER`: Número entero.
- `FLOAT`: Número de punto flotante.
- `BOOLEAN`: Valor booleano.
- `DATE`: Fecha y hora.
- `UUID`: Identificador único universal.

Para una lista completa de tipos de datos, consulta la [documentación oficial de Sequelize](https://sequelize.org/master/manual/model-basics.html#data-types).

## Métodos de Sequelize

### Crear (Create)

Para crear una nueva instancia de un modelo y guardarla en la base de datos, usa el método `create`:

```javascript
const newUser = await User.create({ name: 'John Doe', email: 'john@example.com' });
```

### Encontrar uno (Find One)

Para encontrar una única instancia de un modelo, usa el método `findOne`:

```javascript
const user = await User.findOne({ where: { id: 1 } });
```

### Encontrar todos (Find All)

Para encontrar todas las instancias de un modelo, usa el método `findAll`:

```javascript
const users = await User.findAll();
```

### Actualizar (Update)

Para actualizar una instancia existente de un modelo, usa el método `update`:

```javascript
await User.update({ name: 'Jane Doe' }, { where: { id: 1 } });
```

### Eliminar (Destroy)

Para eliminar una instancia existente de un modelo, usa el método `destroy`:

```javascript
await User.destroy({ where: { id: 1 } });
```

Para más detalles sobre los métodos disponibles en Sequelize, consulta la [documentación oficial de Sequelize](https://sequelize.org/master/manual/model-querying-basics.html).

## Conclusión

Sequelize simplifica la interacción con bases de datos SQL en aplicaciones Node.js al proporcionar una API de alto nivel para definir modelos, relaciones y realizar operaciones CRUD. Al aprender a usar Sequelize, podrás gestionar datos de manera eficiente y mantener tu código limpio y mantenible.

Para más información y detalles, consulta la [documentación oficial de Sequelize](https://sequelize.org/master/).
