import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";

import { Student } from "./student.model.js";
import { Course } from "./course.model.js";

export const StudentCourse = sequelize.define(
  "student_course",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);


Student.belongsToMany(Course, {
    through: StudentCourse,
});

Course.belongsToMany(Student, {
    through: StudentCourse,
})