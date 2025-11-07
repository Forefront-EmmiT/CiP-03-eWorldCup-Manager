"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remainingMatches = remainingMatches;
const maxRounds_1 = require("./maxRounds");
function remainingMatches(n, D) {
    const roundsLeft = (0, maxRounds_1.maxRounds)(n) - D;
    const matchesLeft = roundsLeft * (n / 2);
    return matchesLeft;
}
//# sourceMappingURL=remainingMatches.js.map