import data from "../data/players.json";

function mapPos(
  pos: number,
  rotations: number,
  numberOfRounds: number
): number {
  if (pos === 0) return 0;
  return 1 + ((pos - 1 + rotations) % numberOfRounds);
}

export function getOpponentForPlayer(
  N: number,
  playerIndex: number,
  d: number
): string {
  const numberOfRounds = N - 1;
  const rotations = (d - 1) % numberOfRounds;

  for (let i = 0; i < N / 2; i++) {
    const rightPos = N - 1 - i;
    const a1 = mapPos(i, rotations, numberOfRounds);
    const a2 = mapPos(rightPos, rotations, numberOfRounds);

    // Jämför mot 1-baserat index
    if (a1 + 1 === playerIndex) {
      return data[a2]?.name ?? `Player ${a2 + 1}`;
    }
    if (a2 + 1 === playerIndex) {
      return data[a1]?.name ?? `Player ${a1 + 1}`;
    }
  }
  return "No opponent";
}
  