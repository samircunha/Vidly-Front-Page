import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/auth", data)
      .then((res) => {
        setError(false);
        navigate("/OK");
      })
      .catch((error) => setError(true));
  };
  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="email"
          error={error ? "true" : ""}
          label="E-mail"
        ></Input>
        <Input
          {...register("password")}
          type="password"
          label="Password"
          error={error ? "true" : ""}
          helperText={error ? "E-mail or Password incorrect" : ""}
        ></Input>
        <PrimaryButton type="submit">Login</PrimaryButton>
      </Form>
    </MainContainer>
  );
}
