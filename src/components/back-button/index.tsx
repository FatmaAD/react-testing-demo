import React from 'react';
import { ArrowBack } from "@mui/icons-material";
import {Box, Button } from "@mui/material";

export default function BackBtn ({clickHandler}: {clickHandler: () => void}) {
    return <Box mt={8} mb={3}>
    <Button
      color="secondary"
      onClick={clickHandler}
      startIcon={<ArrowBack color="secondary" />}
    >
      Back to search
    </Button>
  </Box>
}