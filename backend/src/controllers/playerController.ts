import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import type { Player } from "../types/types";
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
  const n = parseInt(req.query.n as string);

  if (!n || isNaN(n) || n < 2) {
    return next({
      status: 400,
      message: "Parameter n is required and must be a number larger than 1",
    });
  }

  const result = maxRounds(n);
  res.json({
    maxRounds: result,
    players: n,
  });
};

export const getRounds = (req: Request, res: Response, next: Function) => {
  const n = playersData.length;
  const d = parseInt(req.query.d as string);

  if (!d || isNaN(d) || d < 1) {
    return next({
      status: 400,
      message: "Parameter n is required and must be a number larger than 1",
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
  const n = parseInt(req.query.n as string);
  const D = parseInt(req.query.D as string);

  if (!D || isNaN(D) || D < 1) {
    return next({
      status: 400,
      message: "Parameter D is required and must be a number larger than 1",
    });
  }

  const result = remainingMatches(n, D);
  res.json({
    remainingMatches: result,
  });
};

export const getMatch = (req: Request, res: Response, next: Function) => {
  const n = playersData.length;
  const i = parseInt(req.query.i as string);
  const d = parseInt(req.query.d as string);

  if (!d || isNaN(d) || d < 1) {
    return next({
      status: 400,
      message: "Parameter d is required and must be a number larger than 1",
    });
  }

  const result = getOpponentInRounds(n, i, d);
  res.json({
    Opponents: result,
  });
};
