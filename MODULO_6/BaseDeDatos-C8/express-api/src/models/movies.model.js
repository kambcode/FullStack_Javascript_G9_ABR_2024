import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Movie = sequelize.define(
  "movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
