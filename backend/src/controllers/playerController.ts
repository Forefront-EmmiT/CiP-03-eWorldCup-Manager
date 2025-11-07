import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import type { Player, ValidationError } from "../../../shared/validation/types";
import { maxRounds } from "../utils/maxRounds";
import { roundRobin } from "../utils/roundRobin";
import { remainingMatches } from "../utils/remainingMatches";
import { getOpponentForPlayer } from "../utils/getOpponentInRound";
import { createSchedule } from "../utils/createSchedule";
import { generateRound } from "../utils/generateRound";
import {
  validateD,
  validateIndexD,
  validateI,
  validateN,
} from "../../../shared/validation/formValidation";

const playersData: Player[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../src/data/players.json"), "utf8")
);

export const getHello = (req: Request, res: Response) => {
  res.json({ message: "hello world" });
};

export const getPlayers = (req: Request, res: Response) => {
  res.json({
    total: playersData.length,
    players: playersData,
  });
};

export const getMaxRounds = (req: Request, res: Response, next: Function) => {
  const errors: ValidationError[] = [];
  const n = parseInt(req.query.n as string);

  const validation = validateN(n);

  if (!validation.isValid) {
    errors.push({
      field: "n",
      message: validation.errorMsg ?? "Unknown validation",
    });
  }

  if (!validation.isValid) {
    return next({
      status: 400,
      message: "Validation errors",
      errors: [{ field: "n", message: validation.errorMsg }],
    });
  }

  const result = maxRounds(n);
  res.json({
    maxRounds: result,
    players: n,
  });
};

export const getRounds = (req: Request, res: Response, next: Function) => {
  const errors: ValidationError[] = [];
  const n = playersData.length;
  const d = parseInt(req.query.d as string);

  const validation = validateN(d);

  if (!validation.isValid) {
    errors.push({
      field: "d",
      message: validation.errorMsg ?? "Unknown validation",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const allRounds = roundRobin(n, playersData);
  const result = generateRound(allRounds, d);
  res.json({ rounds: allRounds });
};

export const getRemainingMatches = (
  req: Request,
  res: Response,
  next: Function
) => {
  const errors: ValidationError[] = [];
  const n = parseInt(req.query.n as string);
  const D = parseInt(req.query.D as string);

  const nValidation = validateN(n);
  const dValidation = validateD(D, n);

  if (!dValidation.isValid) {
    errors.push({
      field: "D",
      message: dValidation.errorMsg ?? "Unknown validation",
    });
  }

  if (!nValidation.isValid) {
    errors.push({
      field: "n",
      message: nValidation.errorMsg ?? "Unknown validation",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const result = remainingMatches(n, D);
  res.json({
    remainingMatches: result,
  });
};

export const getMatch = (req: Request, res: Response, next: Function) => {
  const errors: ValidationError[] = [];
  const n = playersData.length;
  const i = parseInt(req.query.i as string);
  const d = parseInt(req.query.d as string);

  const nValidation = validateN(n);
  const iValidation = validateI(i, n);
  const dValidation = validateIndexD(d, n);

  if (!nValidation.isValid) {
    errors.push({
      field: "n",
      message: nValidation.errorMsg ?? "Unknown validation",
    });
  }

  if (!iValidation.isValid) {
    errors.push({
      field: "i",
      message: iValidation.errorMsg ?? "Unknown validation",
    });
  }

  if (!dValidation.isValid) {
    errors.push({
      field: "d",
      message: dValidation.errorMsg ?? "Unknown validation",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const result = getOpponentForPlayer(n, i, d);
  res.json({
    Opponents: result,
  });
};

export const getSchedule = (req: Request, res: Response, next: Function) => {
  const errors: ValidationError[] = [];
  const n = playersData.length;
  const i = parseInt(req.params.i as string);

  if (!i || isNaN(i) || i < 1) {
    errors.push({
      field: "i",
      message: "Parameter i is required and must be a positive number",
    });
  }
  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const result = createSchedule(n, i);
  res.json({
    schedule: result,
  });
};
