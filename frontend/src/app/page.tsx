"use client";

import { Typography } from "@mui/material";
import api from "../utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/")
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Error getting route"));
  });

  return (
    <div>
      <Typography variant="h1">Test</Typography>
      <Typography>{message}</Typography>
    </div>
  );
}
