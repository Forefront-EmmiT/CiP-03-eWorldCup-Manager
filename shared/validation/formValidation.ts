import type { ValidationResult } from "./types";

export const validateFormInput = (n: number, d: number): ValidationResult => {
  if (n % 2 !== 0) {
    return {
      isValid: false,
      errorMsg: "Number of players must be even!",
    };
  }

  if (d < 1) {
    return {
      isValid: false,
      errorMsg: "Round must be at least 1",
    };
  }

  if (d > n - 1) {
    return {
      isValid: false,
      errorMsg: "Tournament Rounds must be less than number of players",
    };
  }

  // if (n > maxPlayers) {
  //   return {
  //     isValid: false,
  //     errorMsg: `Maximum ${maxPlayers} players allowed`,
  //   };
  // }

  return { isValid: true };
};

export const validatePlayerInput = (
  playerIndex: number,
  n: number
): ValidationResult => {
  if (playerIndex < 0) {
    return {
      isValid: false,
      errorMsg: "Player index cannot be negative",
    };
  }
  if (playerIndex >= n) {
    return {
      isValid: false,
      errorMsg: `Player index (${playerIndex}) must be less than number of players (${n})`,
    };
  }

  return { isValid: true };
};

export const validateRoundInput = (
  round: number,
  n: number
): ValidationResult => {
  if (round < 1) {
    return {
      isValid: false,
      errorMsg: "Round must be at least 1",
    };
  }

  const maxRoundsForN = n - 1;
  if (round > maxRoundsForN) {
    return {
      isValid: false,
      errorMsg: `Round (${round}) cannot be greater than max rounds (${maxRoundsForN})`,
    };
  }
  return { isValid: true };
};

export const validateRoundsPlayed = (
  roundsPlayed: number,
  n: number
): ValidationResult => {
  if (roundsPlayed < 0) {
    return {
      isValid: false,
      errorMsg: "Rounds played cannot be negative",
    };
  }

  const maxPossibleRounds = n - 1;
  if (roundsPlayed > maxPossibleRounds) {
    return {
      isValid: false,
      errorMsg: `Rounds played (${roundsPlayed}) cannot exceed maximum possible rounds (${maxPossibleRounds})`,
    };
  }

  return { isValid: true };
};

export const validateFullForm = (
  n: number,
  d: number,
  playerIndex: number,
  whatRound: number,
  roundsPlayed: number
): ValidationResult => {
  const formValidation = validateFormInput(n, d);
  if (!formValidation.isValid) return formValidation;

  const playerValidation = validatePlayerInput(playerIndex, n);
  if (!playerValidation.isValid) return playerValidation;

  const roundValidation = validateRoundInput(whatRound, n);
  if (!roundValidation.isValid) return roundValidation;

  const roundsPlayedValidation = validateRoundsPlayed(roundsPlayed, n);
  if (!roundsPlayedValidation.isValid) return roundsPlayedValidation;

  return { isValid: true };
};

export const validateN = (n: number): ValidationResult => {
  if (!n || isNaN(n) || n < 2) {
    return {
      isValid: false,
      errorMsg: "Parameter n is required and must be a number larger than 1",
    };
  }
  if (n % 2 !== 0) {
    return { isValid: false, errorMsg: "Number of players must be even" };
  }
  return { isValid: true };
};

export const validateD = (D: number, n: number): ValidationResult => {
  if (!D || isNaN(D) || D < 1) {
    return {
      isValid: false,
      errorMsg: "Parameter D is required and must be a number larger than 0",
    };
  }
  if (D > n - 0) {
    return { isValid: false, errorMsg: "D cannot exceed max rounds" };
  }
  return { isValid: true };
};

export const validateIndexD = (d: number, n: number): ValidationResult => {
  if (d === undefined || isNaN(d) || d < 0) {
    return {
      isValid: false,
      errorMsg: "Parameter d is required and must be 0 or larger",
    };
  }
  if (d > n - 0) {
    return { isValid: false, errorMsg: "d cannot exceed max round index" };
  }
  return { isValid: true };
};

export const validateI = (i: number, n: number): ValidationResult => {
  if (!i || isNaN(i) || i < 1) {
    return {
      isValid: false,
      errorMsg: "Parameter i is required and must be a positive number",
    };
  }
  if (i > n) {
    return { isValid: false, errorMsg: "i cannot exceed number of players" };
  }
  return { isValid: true };
};
