import LoginContainer from "./styled";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ButtonStyle from "../Button/styled";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Por favor. digite seu e-mail")
      .email("Esse e-mail é inválido"),
    password: yup
      .string()
      .min(6, "Por favor, sua senha deve conter no mínimo 6 dígitos")
      .required("Por favor, digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    // localStorage.setItem("CapstoneM3:userLogin", JSON.stringify(data));
    console.log(data);

    // history.push("/");
  };

  return (
    <LoginContainer>
      <h2>Digite seus dados</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h5>teste</h5>
          <TextField
            className="register-input"
            size="small"
            label="E-mail"
            placeholder="Digite seu nome"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <TextField
            size="small"
            className="register-input"
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password")}
            type="password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="login-div-warning">
          <h3>Já possui uma conta?</h3>
          <h3 className="login-h3-border" onClick={() => history.push("/")}>
            cadastre-se aqui
          </h3>
        </div>
        <ButtonStyle type="submit">Login</ButtonStyle>
      </Box>
    </LoginContainer>
  );
};

export default Login;
