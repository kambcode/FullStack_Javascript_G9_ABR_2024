import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";
import { Song } from "./song.model.js"

export const Artist = sequelize.define(
  "artist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Artist.hasMany(Song, {
  foreignKey: 'artistId',
  sourceKey: 'id'
});

Song.belongsTo(Artist, {
  foreignKey: 'artistId',
  targetKey: 'id'
});