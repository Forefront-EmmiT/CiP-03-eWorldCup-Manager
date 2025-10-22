"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpponentInRounds = getOpponentInRounds;
const players_json_1 = __importDefault(require("../data/players.json"));
function getOpponentInRounds(n, i, d) {
    const players = players_json_1.default;
    let firstPlayer;
    let secondPlayer;
    if (n <= players_json_1.default.length && i < players_json_1.default.length) {
        firstPlayer = players[i].name;
        secondPlayer = players[((d + n - i) % (n - 1)) + 1].name;
    }
    else {
        // TODO: Round robin for fake players
        firstPlayer = `Player ${i}`;
        secondPlayer = `Player ${((d + n - i) % (n - 1)) + 1}`;
    }
    return `In - round ${d} - player ${firstPlayer} vs. ${secondPlayer}`;
}
//# sourceMappingURL=getOpponentInRound.js.map