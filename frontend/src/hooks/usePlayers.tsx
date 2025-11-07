import { useEffect, useState } from "react";
import api from "@/utils/api";
import { Player } from "@shared/validation/types";

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    api
      .get("/players")
      .then((res) => setPlayers(res.data.players || []))
      .catch(() => setPlayers([]));
  }, []);

  return { players };
}
