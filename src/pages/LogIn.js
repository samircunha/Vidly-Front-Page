import React from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";

export function LogIn() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
  }
  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} type="email" label="E-mail"></Input>
        <Input {...register('password')} type="password" label="Password"></Input>
        <PrimaryButton type='submit'>Log In</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
