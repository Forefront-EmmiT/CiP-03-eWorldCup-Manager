import { getOpponentInRounds } from "./getOpponentInRound";

export function createSchedule(n: number, i: number) {
  const matches: string[] = [];

  for (let r = 1; r < n; r++) {
    const match = getOpponentInRounds(n, i, r);
    matches.push(match);
  }

  return matches;
}
