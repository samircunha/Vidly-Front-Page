import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "../components/MainContainer";
import { PrimaryButton } from "../components/PrimaryButton";

export function FirstPage() {
  const navigate = useNavigate();

  function onSubmit(data) {
    navigate(`/${data}`);
  }
  return (
    <MainContainer>
      <PrimaryButton
        onClick={() => {
          onSubmit("Login");
        }}
      >
        Login
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          onSubmit("Register");
        }}
      >
        Register
      </PrimaryButton>
    </MainContainer>
  );
}
