import {
  Button,
  IconButton,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

const ButtonUI = () => {
  const [toggle, setToggle] = useState<string[]>([]);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedToggles: string[]
  ) => {
    setToggle(updatedToggles);
  };
  return (
    <Stack margin={"20px"} spacing={4}>
      <Stack spacing={4} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" href="#home" disabled>
          Contained (disabled)
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack marginTop={"10px"} spacing={4} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>

      {/* display block is important for sizing , it seems */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          StartIcon
        </Button>
        <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
          EndIcon
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary" disableRipple>
          Without Ripple
        </Button>
        <Button variant="contained" color="secondary" disableElevation>
          Without Elevation
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <IconButton aria-label="send" color={"info"} size="small">
          <SendIcon></SendIcon>
        </IconButton>
        <IconButton aria-label="send" color={"warning"} size="large">
          <SendIcon></SendIcon>
        </IconButton>
        <IconButton aria-label="send" color={"success"} size="medium">
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="contained">
          <Button
            onClick={() => {
              alert("Left Clicked");
            }}
          >
            Left
          </Button>
          <Button
            onClick={() => {
              alert("Middle Clicked");
            }}
          >
            Middle
          </Button>
          <Button
            onClick={() => {
              alert("Right Clicked");
            }}
          >
            Right
          </Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          size="small"
          color="secondary"
          orientation="vertical"
          aria-label=" alignment button group"
        >
          <Button
            onClick={() => {
              alert("Top Clicked");
            }}
          >
            Top
          </Button>
          <Button
            onClick={() => {
              alert("Middle Clicked");
            }}
          >
            Middle
          </Button>
          <Button
            onClick={() => {
              alert("Bottom Clicked");
            }}
          >
            Bottom
          </Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          exclusive
          value={toggle}
          onChange={handleChange}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonUI;
