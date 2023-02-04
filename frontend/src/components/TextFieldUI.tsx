import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const TextFieldUI = () => {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Stack margin={"20px"} spacing={4}>
      {/* 3 types of variants */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="outlined" variant={"outlined"} color="secondary" />
        <TextField label="Filled" variant={"filled"} color="info" />
        <TextField label="Standard" variant={"standard"} color="warning" />
      </Stack>

      {/* Size  */}

      <Stack direction={"row"}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>

      {/*Form attached to a state variable  */}

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="form Input"
          type={"password"}
          required
          value={input}
          helperText={
            !input ? "Required" : "Do not share your password with anyone"
          }
          onChange={handleChange}
          error={!input}
        />
      </Stack>

      {/* Icons within text fields */}

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          disabled
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />

        <TextField
          variant="filled"
          label="password"
          type={"password"}
          required
          InputProps={{
            endAdornment: <VisibilityOffIcon></VisibilityOffIcon>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TextFieldUI;
