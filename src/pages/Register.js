import React from "react";
import { MainContainer } from "../components/MainContainer";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useData } from "../components/DataContext";
import { useNavigate } from 'react-router-dom';

export function Register() {
  const { setValues, data} = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: { name: data.name, email: data.email, password: data.password},
  });
  const navigate = useNavigate();

  const onSubmit = ({name, email, password}) => {
    // setValues({name, email, password});
    navigate('/OK')
    console.log({name, email, password}); 
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
