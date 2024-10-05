import { Box, Link, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4">About</Typography>
      <Link href="/">Go home</Link>
    </Box>
  );
}
