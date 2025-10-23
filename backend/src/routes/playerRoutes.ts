import { Router } from "express";

import {
  getHello,
  getMaxRounds,
  getPlayers,
  getRemainingMatches,
  getRounds,
} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);
router.get("/players", getPlayers);
router.get("/rounds/max", getMaxRounds);
router.get("/rounds", getRounds);
router.get("/match/remaining", getRemainingMatches);

export default router;
