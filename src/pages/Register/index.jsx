import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterContainer from "./styled";

import ButtonStyle from "../../components/Button/styled.js";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Por favor, degite seu nome")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Por favor, digite apenas caracteres nesse campo"
      ),
    email: yup
      .string()
      .required("Por favor. digite seu e-mail")
      .email("Esse e-mail é inválido"),
    password: yup
      .string()
      .min(6, "Por favor, sua senha deve conter no mínimo 6 dígitos")
      .required("Por favor, digite sua senha"),
    confirmPassword: yup
      .string()
      .required("Por favor, confirme sua senha")
      .oneOf(
        [yup.ref("password"), null],
        "Por favor, digite a mesma senha do campo acima"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = ({ name, email, password }) => {
    const userData = { name, email, password };
    // localStorage.setItem("CapstoneM3:user", JSON.stringify(userData));
    console.log(userData);

    history.push("/login");
  };

  return (
    <RegisterContainer>
      <h2>Cadastre-se aqui</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <TextField
            className="register-input"
            size="small"
            label="Name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
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
          <TextField
            size="small"
            className="register-input"
            label="Senha"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            type="password"
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div className="login-div-warning">
          <h3>Já possui uma conta?</h3>
          <h3
            className="login-h3-border"
            onClick={() => history.push("/login")}
          >
            Faça o login
          </h3>
        </div>
        <ButtonStyle type="submit">Cadastrar</ButtonStyle>
      </Box>
    </RegisterContainer>
  );
};

export default Register;
