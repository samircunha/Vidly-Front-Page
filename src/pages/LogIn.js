import React from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom"

export function LogIn() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    navigate('/OK');
  }
  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} type="email" label="E-mail"></Input>
        <Input {...register('password')} type="password" label="Password"></Input>
        <PrimaryButton type='submit'>Login</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
