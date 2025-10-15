import { maxRounds } from './maxRounds';

export function remainingMatches(n: number, D: number) {
  const roundsLeft = maxRounds(n) - D;
  const matchesLeft = roundsLeft * (n / 2);

  return matchesLeft;
}
