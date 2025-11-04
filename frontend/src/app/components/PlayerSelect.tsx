import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Player } from "@shared/validation/types";

interface PlayerSelectProps {
  players: Player[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  label?: string;
}

export default function PlayerSelect({
  players,
  value,
  onChange,
  label = "Player",
}: PlayerSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="player-select-label">{label}</InputLabel>
      <Select
        labelId="player-select-label"
        id="player-select"
        value={value}
        label={label}
        onChange={onChange}
      >
        {players.map((player, idx) => (
          <MenuItem key={idx} value={idx + 1}>
            {player.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
