import Router from "express";
import { getHello, getMaxRounds, getPlayers} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);
router.get("/players", getPlayers);
router.get("rounds/max", getMaxRounds);

export default router;