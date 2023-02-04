import React from "react";
import { Box, Stack, Divider } from "@mui/material";

const StackUI = () => {
  return (
    <Stack
      sx={{
        border: "1px solid",
      }}
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
        Hello
      </Box>
      <Box
        sx={{
          backgroundColor: "success.main",
          width: "200px",
          height: "200px",
          color: "white",
          p: 2,
          "&:hover": {
            backgroundColor: "success.light",
          },
        }}
      >
        Hey there
      </Box>
    </Stack>
  );
};

export default StackUI;
