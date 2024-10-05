import { useRouteError } from "react-router-dom";

import { Box, Link, Typography } from "@mui/material";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>{error.statusText || error.message}</Typography>
      <Link href="/">Go Home</Link>
    </Box>
  );
}
