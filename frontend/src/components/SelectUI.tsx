import React, { useState } from "react";
import { TextField, MenuItem, Box } from "@mui/material";

const SelectUI = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<String[]>([]);
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  console.log(country);
  console.log(countries);
  return (
    <Box width={"250px"} margin={"20px"}>
      <TextField
        label="Select Country"
        select
        value={country}
        size={"small"}
        fullWidth
        helperText={"Please select your country"}
        onChange={handleClick}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>

      <TextField
        label="Select Country"
        select
        value={countries}
        size={"small"}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        helperText={"Please select your country"}
        onChange={handleMultipleChange}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box>
  );
};

export default SelectUI;
