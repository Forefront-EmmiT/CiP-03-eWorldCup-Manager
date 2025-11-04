"use client";

import api from "@/utils/api";
import { Typography, Box, List, ListItem, Paper } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { validateI } from "@shared/validation/formValidation";
import { useRouter } from "next/navigation";
import { usePlayers } from "@/hooks/usePlayers";
import PlayerSelect from "@/app/components/PlayerSelect";
import { SelectChangeEvent } from "@mui/material/Select";

export default function PlayerSchedulePage() {
  const { players } = usePlayers();
  const [schedule, setSchedule] = useState<string[]>([]);
  const params = useParams();
  const router = useRouter();
  const i = Number(params.i);

  const validation = validateI(i, 19);

  useEffect(() => {
    if (validation.isValid) {
      api
        .get(`/player/${i}/schedule`)
        .then((res) => {
          setSchedule(res.data.schedule);
        })
        .catch(() => setSchedule([]));
    }
  }, [i, validation.isValid]);

  const handleChange = (event: SelectChangeEvent) => {
    router.push(`/schedule/${event.target.value}`);
  };

  if (!validation.isValid) {
    return <div>Error: {validation.errorMsg}</div>;
  }

  return (
    <>
      <Typography variant="h1" gutterBottom sx={{ mx: 2 }}>
        Schedule
      </Typography>

      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <PlayerSelect
          players={players}
          value={i.toString()}
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Schedule for {players[i - 1]?.name || `Player ${i}`}
        </Typography>
        <Paper elevation={1}>
          <List>
            {schedule.map((opponent, idx) => (
              <ListItem key={idx} divider>
                Round {idx + 1}: vs {opponent}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </>
  );
}
