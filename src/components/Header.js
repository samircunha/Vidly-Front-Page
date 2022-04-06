import React from "react";
import Typography from "@mui/material/Typography";

export function Header() {
  const stylesHeader = {
    textAlign: "center",
    fontFamily: "Rubik Wet Paint",
    color: 'white',
    // transform: 'translate(-20%)'
  };
  return (
    <Typography variant="h2" sx={stylesHeader}>
      Welcome to Vidly!
    </Typography>
  );
}
