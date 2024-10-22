import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

export const Student = sequelize.define(
  "student",
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
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    }
  },
  {
    timestamps: false,
  }
);
