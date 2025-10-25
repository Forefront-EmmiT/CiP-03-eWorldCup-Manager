import { Round } from "../types/types";

export function generateRound(rounds: Round[], d: number): Round | undefined {
    return rounds[d - 1]
}