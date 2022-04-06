import React from "react";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";

export function Register() {
  return (
    <MainContainer>
      <Form>
        <Input name="Name" type="text" label="Name"></Input>
        <Input name="E-mail" type="email" label="E-mail"></Input>
        <Input name="Password" type="password" label="Password"></Input>
        <PrimaryButton type='submit'>Register</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
