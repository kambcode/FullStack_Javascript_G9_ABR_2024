import { Router } from "express";
import { ArtistController } from "../controllers/artist.controller.js";

const router = Router();
const controller = new ArtistController();

router.get("/artists",  controller.getArtist);

router.get("/artists/:id", controller.getArtistById);

router.get("/artists/name/:name", controller.getArtistByName);

router.post("/artists", controller.create);

router.put("/artists/:id", controller.updateArtist);

router.delete("/artists/:id", controller.deleteArtist);

export default router;
