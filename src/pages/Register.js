import React from "react";
import { MainContainer } from "../components/MainContainer";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from 'react-router-dom';

export function Register() {
  const { register, handleSubmit } = useForm({
  });
  const navigate = useNavigate();

  const onSubmit = ({name, email, password}) => {
    navigate('/OK')
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} type="text" label="Name"></Input>
        <Input {...register("email")} type="email" label="E-mail"></Input>
        <Input
          {...register("password")}
          type="password"
          label="Password"
        ></Input>
        <PrimaryButton type="submit">Register</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
