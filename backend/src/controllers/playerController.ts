import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import type { Player } from "../types/types";
import { maxRounds } from "../utils/maxRounds";

const playersData: Player[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "players.json"), "utf8")
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

export const getMaxRounds = (req: Request, res: Response) => {
  const n = parseInt(req.query.n as string);

  if (!n || isNaN(n) || n < 2) {
    return res.status(400).json({
      error: "Parameter n is required and must be a number >= 2",
    });
  }

  try {
    const result = maxRounds(n);
    res.json({
      maxRounds: result,
      players: n,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
