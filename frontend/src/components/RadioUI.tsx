import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
const RadioUI = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box width={"250px"} margin={"30px"}>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-label="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size={"small"} color="secondary" />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel
            control={<Radio size={"medium"} color="success" />}
            label="3-5"
            value={"3-5"}
          />
          <FormControlLabel control={<Radio />} label="6-10" value={"6-10"} />
        </RadioGroup>

        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default RadioUI;
