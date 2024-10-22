import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";
import { Document } from "./document.model.js";

export const Person = sequelize.define(
  "person",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    }
  },
  {
    timestamps: false,
  }
);

Person.hasOne(Document, {
    foreignKey: 'personId',
    sourceKey: 'id',
});

Document.belongsTo(Person, {
    foreignKey: 'personId',
    targetKey: 'id'
});