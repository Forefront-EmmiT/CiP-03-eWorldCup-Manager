import type { Match } from "../types/types";

export function formatRound(match: Match) {
  return `${match.playerOne} vs. ${match.playerTwo}`;
}
