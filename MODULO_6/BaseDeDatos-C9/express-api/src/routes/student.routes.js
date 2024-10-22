import { Router } from "express";
import { StudentController } from "../controllers/index.js";

const router = Router();
const controller = new StudentController();

router.get("/students", controller.getStudents);

export default router;
