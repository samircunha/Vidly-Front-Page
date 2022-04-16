import axios from "axios";
import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm({});
  const navigate = useNavigate();

  const registerUser = (data) => {
    axios
      .post("http://localhost:5000/api/users", data)
      .then((res) => {
        setError(false);
        alert("Cadastro efetuado com sucesso!");
        navigate("/Login");
      })
      .catch((error) => setError(true));
  };

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} type="text" label="Name"></Input>
        <Input
          {...register("email")}
          type="email"
          error={error ? "true" : ""}
          helperText={error ? "E-mail alredy exists" : ""}
          label="E-mail"
        ></Input>
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
