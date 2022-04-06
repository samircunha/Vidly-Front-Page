import React from "react";
import Button from "@mui/material/Button";

export function PrimaryButton({ children, type, ...props }) {
  const stylesButtons = {
    color: "white",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "RGB(0,0,0,0.7)",
      borderRadius: "5px",
    },
  };
  return (
    <Button fullWidth sx={stylesButtons} size="large" type={type} {...props}>
      {children}
    </Button>
  );
}
