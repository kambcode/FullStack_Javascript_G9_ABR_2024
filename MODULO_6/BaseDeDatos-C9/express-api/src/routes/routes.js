import { Router } from "express";

import { songRoutes, artistRoutes, studentRoutes } from "./index.js"

const router = Router();

router.use(songRoutes);
router.use(artistRoutes);
router.use(studentRoutes);

export default router;