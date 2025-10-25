import type { Player, Match } from "../types/types";

export function roundRobinForSpecificRound(
  n: number,
  r: number,
  playerData: Player[]
) {
  const players: Player[] = playerData;
  const matches: Match[] = [];

  const fixedPlayer = players[0];

  for (let i = 1; i < n / 2; i++) {
    const firstPlayer =
      i === 0 ? fixedPlayer.name : players[((r + i - 1) % (n - 1)) + 1].name;
    const secondPlayer = players[((r + n - i - 2) % (n - 1)) + 1].name;

    matches.push({
      playerOne: firstPlayer,
      playerTwo: secondPlayer,
    });
  }

  return matches;
}
