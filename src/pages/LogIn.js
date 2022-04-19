import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useLogged } from "../context/Logged";

export function Login() {
  const [error, setError] = useState(false);
  const { changeStatus } = useLogged();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const authUser = (data) => {
    axios
      .post("http://localhost:5000/api/auth", data)
      .then((res) => {
        setError(false);
        navigate('/Browse');
        changeStatus(true);
      })
      .catch((error) => setError(true));
  };

  const removeBackground = () => {
    const body = document.querySelector("body");
    body.style.background = "black";
  }

  const onSubmit = (data) => {
    authUser(data);
    removeBackground();
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
