import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";



export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      variant="standard"
      inputRef={ref}
      fullWidth
      {...props}
      margin='dense'
      sx={{
        backgroundColor: 'white',
      }}
    />
  );
});
