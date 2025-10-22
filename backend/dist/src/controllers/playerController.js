"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxRounds = exports.getPlayers = exports.getHello = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const maxRounds_1 = require("../utils/maxRounds");
const playersData = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "../../src/data/players.json"), "utf8"));
const getHello = (req, res) => {
    res.json({ message: "hello world" });
};
exports.getHello = getHello;
const getPlayers = (req, res) => {
    res.json({
        total: playersData.length,
        players: playersData,
    });
};
exports.getPlayers = getPlayers;
const getMaxRounds = (req, res, next) => {
    const n = parseInt(req.query.n);
    if (!n || isNaN(n) || n < 2) {
        return next({
            status: 400,
            message: "Parameter n is required an must be a number larger then 1",
        });
    }
    const result = (0, maxRounds_1.maxRounds)(n);
    res.json({
        maxRounds: result,
        players: n,
    });
};
exports.getMaxRounds = getMaxRounds;
//# sourceMappingURL=playerController.js.map