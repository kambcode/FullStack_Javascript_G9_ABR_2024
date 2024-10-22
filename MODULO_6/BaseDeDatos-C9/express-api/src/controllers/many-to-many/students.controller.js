import { Student, Course } from "../../models/index.js";


export class StudentController {

    getStudents = async (req, res) => {

        try {
          const students = await Student.findAll({
            include: {
              model: Course,
              attributes: ['id', 'name']
            }
          });
      
          res.json(students);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
    }

};