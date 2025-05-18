import { MenuItem, TextField } from "@mui/material";
import React from "react";

const AutoCompleteItem = (props) => {
  return (
    <>
      <TextField
        style={{ fontFamily: "Raleway" }}
        id="outlined-select-country"
        value={props.value}
        select
        label="Hangi Ülkenin Haberini istersiniz"
        onChange={(e) => props.onCustomChange(e.target.value)}
      >
        {props.item.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default AutoCompleteItem;
