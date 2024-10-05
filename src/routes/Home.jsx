import { useState } from "react";

import reactLogo from "../assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

import { Box, Typography, Link, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const Logo = styled("img")(({ theme }) => ({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "0.5s",
  "&:hover": {
    filter: "drop-shadow(0 0 2em #747bff)",
  },
}));

export default function Home() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4">Welcome to Tauri!</Typography>

      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Link href="https://vitejs.dev" target="_blank">
          <Logo src="/vite.svg" alt="Vite logo" sx={{ "&:hover": { filter: "drop-shadow(0 0 2em #61dafb)" } }} />
        </Link>
        <Link href="https://tauri.app" target="_blank">
          <Logo src="/tauri.svg" alt="Tauri logo" sx={{ "&:hover": { filter: "drop-shadow(0 0 2em #24c8db)" } }} />
        </Link>
        <Link href="https://reactjs.org" target="_blank">
          <Logo src={reactLogo} alt="React logo" sx={{ "&:hover": { filter: "drop-shadow(0 0 2em #747bff)" } }} />
        </Link>
      </Box>

      <Typography>Click on the Tauri, Vite, and React logos to learn more.</Typography>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <TextField
          id="greet-input"
          size="small"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
          sx={{ margin: "5px" }}
        />
        <Button type="submit" sx={{ padding: "0.6em 1.2em" }}>
          Greet
        </Button>
      </form>

      <Typography>{greetMsg}</Typography>
      <Link href="/about">Go to About</Link>
    </Box>
  );
}
