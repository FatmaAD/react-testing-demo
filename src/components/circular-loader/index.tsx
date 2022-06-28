import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";

export default function CircularLoader() {
  return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center">
      <CircularProgress role="progressbar" />
    </Box>
  );
}
