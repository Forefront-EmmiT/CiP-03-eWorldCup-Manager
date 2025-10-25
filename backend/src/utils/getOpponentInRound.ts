import data from "../data/players.json";
import { roundRobin } from "./roundRobin";
import { roundRobinForSpecificRound } from "./roundRobinForSpecificRound";

export function getOpponentInRound(n: number, i: number, d: number) {
  const playerData = data;

  // const round = roundRobin(n, d, playerData);

  // console.log(round[]);

  // const matches = roundRobinForSpecificRound(n, d, players);

  // const match = matches.find(
  //   (m) => m.playerOne === players[i].name || m.playerTwo === players[i].name
  // );

  // const opponent =
  //   match?.playerOne === players[i].name ? match.playerTwo : match?.playerOne;

  // return `In - round ${d} - player ${players[i].name} vs. ${opponent}`;
  return "hej";
}
