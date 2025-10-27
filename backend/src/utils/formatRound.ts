import type { Match } from "../../../shared/validation/types";

export function formatRound(match: Match) {
  return `${match.playerOne} vs. ${match.playerTwo}`;
}
