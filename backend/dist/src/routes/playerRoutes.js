"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerController_1 = require("../controllers/playerController");
const router = (0, express_1.default)();
router.get("/", playerController_1.getHello);
router.get("/players", playerController_1.getPlayers);
router.get("/rounds/max", playerController_1.getMaxRounds);
exports.default = router;
//# sourceMappingURL=playerRoutes.js.map