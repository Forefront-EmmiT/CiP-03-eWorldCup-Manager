import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import type { Player, ValidationError } from "../types/types";
import { maxRounds } from "../utils/maxRounds";
import { roundRobin } from "../utils/roundRobin";
import { remainingMatches } from "../utils/remainingMatches";
import { getOpponentInRounds } from "../utils/getOpponentInRound";

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

  if (!n || isNaN(n) || n < 2) {
    errors.push({
      field: "n",
      message: "Parameter n is required and must be a number larger than 1",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
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

  if (!n || isNaN(n) || n < 2) {
    errors.push({
      field: "n",
      message: "Parameter n is required and must be a number larger than 2",
    });
  }
  if (!d || isNaN(d) || d < 1) {
    errors.push({
      field: "d",
      message: "Parameter d is required and must be a number larger than 1",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const result = roundRobin(n, d, playersData);
  res.json({ rounds: result });
};

export const getRemainingMatches = (
  req: Request,
  res: Response,
  next: Function
) => {
  const errors: ValidationError[] = [];
  const n = parseInt(req.query.n as string);
  const D = parseInt(req.query.D as string);

  if (!n || isNaN(n) || n < 2) {
    errors.push({
      field: "n",
      message: "Parameter n is required and must be a number larger than 2",
    });
  }
  if (!D || isNaN(D) || D < 1) {
    errors.push({
      field: "D",
      message: "Parameter D is required and must be a number larger than 1",
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

  if (!i || isNaN(i) || i < 1) {
    errors.push({
      field: "i",
      message: "Parameter i is required and must be a number larger than 1",
    });
  }
  if (!d || isNaN(d) || d < 1) {
    errors.push({
      field: "d",
      message: "Parameter d is required and must be a number larger than 1",
    });
  }

  if (errors.length > 0) {
    return next({
      status: 400,
      message: "Validation errors",
      errors,
    });
  }

  const result = getOpponentInRounds(n, i, d);
  res.json({
    Opponents: result,
  });
};
