import { Router } from "express";
import { MovieController } from "../controllers/movies.controller.js";

const router = Router();
const controller = new MovieController();

router.get("/movies",  controller.getMovies);

router.get("/movies/:id", controller.getMovieById);

router.post("/movies", controller.create);

router.put("/movies/:id", controller.updateMovie);

router.delete("/movies/:id", controller.deleteMovie);

export default router;
