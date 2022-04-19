import React from "react";
import Typography from "@mui/material/Typography";

export function Header() {
  const stylesHeader = {
    textAlign: "center",
    fontFamily: "Rubik Wet Paint",
    color: 'white',
  };
  return (
    <Typography variant="h3" sx={stylesHeader}>
      Welcome to Vidly!
    </Typography>
  );
}
