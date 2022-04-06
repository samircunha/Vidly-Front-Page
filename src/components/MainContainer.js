import React from "react";
import Container from "@mui/material/Container";

export function MainContainer({ children, ...props }) {
  const stylesMain = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20vh',
  };
  return (
    <Container component="main" maxWidth='xs' sx={stylesMain} {...props}>
      {children}
    </Container>
  );
}
