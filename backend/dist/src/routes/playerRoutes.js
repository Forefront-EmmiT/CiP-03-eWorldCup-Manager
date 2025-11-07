"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = require("../controllers/playerController");
const router = (0, express_1.Router)();
router.get("/", playerController_1.getHello);
// router.get("/players", getPlayers);
// router.get("/rounds/max", getMaxRounds);
// router.get("/rounds", getRounds);
exports.default = router;
//# sourceMappingURL=playerRoutes.js.map