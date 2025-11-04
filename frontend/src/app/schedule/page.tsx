"use client";

import { Typography, Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlayers } from "@/hooks/usePlayers";
import PlayerSelect from "@/app/components/PlayerSelect";
import { SelectChangeEvent } from "@mui/material/Select";

export default function PlayerSelectPage() {
  const { players } = usePlayers();
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    const playerIndex = event.target.value;
    setSelectedPlayer(playerIndex);
    router.push(`/schedule/${playerIndex}`);
  };

  return (
    <>
      <Typography>Schedule:</Typography>

      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Select Player
        </Typography>
        <PlayerSelect
          players={players}
          value={selectedPlayer}
          onChange={handleChange}
        />
      </Box>
    </>
  );
}
