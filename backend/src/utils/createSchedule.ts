import { getOpponentForPlayer } from "./getOpponentInRound";

export function createSchedule(n: number, i: number) {
  const matches: string[] = [];

  for (let r: number = 1; r < n; r++) {
    const match = getOpponentForPlayer(n, i, r);
      matches.push(match);
  }

  return matches;
}
//
