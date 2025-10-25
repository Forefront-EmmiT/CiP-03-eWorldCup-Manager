import { Router } from "express";

import {
  getHello,
  getMaxRounds,
  getPlayers,
  getRemainingMatches,
  getRounds,
  getMatch,
  // getSchedule,
} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);
router.get("/players", getPlayers);
router.get("/rounds/max", getMaxRounds);
router.get("/rounds", getRounds);
router.get("/match/remaining", getRemainingMatches);
router.get("/match", getMatch);
// router.get("/player/:i/schedule", getSchedule);

export default router;
