import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import type { Player } from "../types/types";
import { maxRounds } from "../utils/maxRounds";

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
      message: "Parameter n is required an must be a number larger then 1",
    });
  }

  const result = maxRounds(n);
  res.json({
    maxRounds: result,
    players: n,
  });
};
