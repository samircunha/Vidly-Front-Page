import React from "react";
import Container from "@mui/material/Container";

export function MainContainer({ children, ...props }) {
  return (
    <Container component="main" maxWidth="xs" {...props}>
      {children}
    </Container>
  );
}
