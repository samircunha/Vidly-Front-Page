import React from "react";
// import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";

export function LogIn() {
  // const { register, handleSubmit, errors } = useForm();

  return (
    <MainContainer>
      <Form>
        <Input name="E-mail" type="email" label="E-mail"></Input>
        <Input name="Password" type="password" label="Password"></Input>
        <PrimaryButton type='submit'>Log In</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
