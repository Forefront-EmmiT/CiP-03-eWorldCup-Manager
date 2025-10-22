import { Router } from "express";

import {
  getHello,
  getMaxRounds,
  getPlayers,
  getRounds
} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);
router.get("/players", getPlayers);
router.get("/rounds/max", getMaxRounds);
router.get("/rounds", getRounds);

export default router;
