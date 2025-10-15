import data from '../data/participantsList.json';

export function getOpponentInRounds(n: number, i: number, d: number) {
  const players = data;
  let firstPlayer: string;
  let secondPlayer: string;

  if (n <= data.length && i < data.length) {
    firstPlayer = players[i].name;
    secondPlayer = players[((d + n - i) % (n - 1)) + 1].name;
  } else {
    // TODO: Round robin for fake players
    firstPlayer = `Player ${i}`;
    secondPlayer = `Player ${((d + n - i) % (n - 1)) + 1}`;
  }

  return `In - round ${d} - player ${firstPlayer} vs. ${secondPlayer}`;
}
