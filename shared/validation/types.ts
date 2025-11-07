export interface Player {
  id: number;
  name: string;
}

export interface ValidationResult {
  isValid: boolean;
  errorMsg?: string;
}

export interface Match {
  playerOne: string;
  playerTwo: string;
}

export interface Round {
  roundNumber: number;
  matches: Match[];
}

export type ValidationError = {
  field: string;
  message: string;
}
