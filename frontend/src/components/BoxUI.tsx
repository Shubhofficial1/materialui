import React from "react";
import { Box } from "@mui/material";

const BoxUI = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "200px",
        height: "200px",
        color: "white",
        p: 2,
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      BoxUI
    </Box>
  );
};

export default BoxUI;
