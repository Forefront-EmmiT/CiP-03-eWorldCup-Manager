import type { Player, Round, Match } from "../types/types";

export function roundRobin(n: number, playerData: Player[]): Round[] {
  const players: Player[] = playerData;
  const allRounds: Round[] = [];

  for (let r = 0; r < n - 1; r++) {
    const matches: Match[] = [];

    matches.push({
      playerOne: players[0].name,
      playerTwo: players[(r % (n - 1)) + 1].name,
    });

    for (let i = 1; i < n / 2; i++) {
      const firstPlayer = players[((r + i) % (n - 1)) + 1].name;
      const secondPlayer = players[((r + n - i - 1) % (n - 1)) + 1].name;

      matches.push({
        playerOne: firstPlayer,
        playerTwo: secondPlayer,
      });
    }

    allRounds.push({
      roundNumber: r + 1,
      matches: matches,
    });
  }

  return allRounds;
}
