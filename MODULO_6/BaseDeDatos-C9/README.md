# Clase 9: Creación de Relaciones en Bases de Datos con Sequelize

## Introducción a las Relaciones en Bases de Datos

En las bases de datos relacionales, las relaciones son fundamentales para organizar y conectar diferentes tablas de manera lógica. Sequelize, un ORM para Node.js, nos permite definir y manejar estas relaciones de manera eficiente en nuestros proyectos.

## Tipos de Relaciones en Sequelize

### 1. Relaciones Uno a Muchos (One-to-Many)

En una relación uno a muchos, una fila en una tabla puede estar asociada con múltiples filas en otra tabla. Por ejemplo, un artista puede tener muchas canciones, pero una canción solo puede pertenecer a un artista.

Para definir una relación uno a muchos en Sequelize:

```javascript
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const Artist = sequelize.define('Artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Song = sequelize.define('Song', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Artist.hasMany(Song, { foreignKey: 'artistId' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
});
```

### 2. Relaciones Muchos a Muchos (Many-to-Many)

En una relación muchos a muchos, múltiples filas en una tabla pueden estar asociadas con múltiples filas en otra tabla. Esto se logra a través de una tabla intermedia. Por ejemplo, una canción puede pertenecer a múltiples playlists, y una playlist puede contener múltiples canciones.

Para definir una relación muchos a muchos en Sequelize:

```javascript
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const Playlist = sequelize.define('Playlist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Song = sequelize.define('Song', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const PlaylistSong = sequelize.define('PlaylistSong', {});

Playlist.belongsToMany(Song, { through: PlaylistSong });
Song.belongsToMany(Playlist, { through: PlaylistSong });

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
});
```

### 3. Relaciones Uno a Uno (One-to-One)

En una relación uno a uno, una fila en una tabla está asociada con una única fila en otra tabla. Por ejemplo, un usuario puede tener un perfil único.

Para definir una relación uno a uno en Sequelize:

```javascript
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Profile = sequelize.define('Profile', {
    bio: {
        type: DataTypes.TEXT,
    },
});

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync({ force: true }).then(() => {
    console.log("Database & tables created!");
});
```

## Métodos de Sequelize para Trabajar con Relaciones

Sequelize proporciona varios métodos para trabajar con relaciones. Algunos de los más utilizados incluyen:

- `findOne()`
- `findAll()`
- `create()`
- `update()`
- `destroy()`
- `belongsTo()`
- `hasMany()`
- `belongsToMany()`
- `hasOne()`

Puedes encontrar una lista completa de métodos y sus descripciones en la [documentación oficial de Sequelize](https://sequelize.org/master/).

## Recursos Adicionales

Para obtener más información sobre cómo trabajar con relaciones en Sequelize, visita la [documentación oficial de Sequelize](https://sequelize.org/master/manual/assocs.html).
