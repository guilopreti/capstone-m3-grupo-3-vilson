import RegisterContainer from "./styled";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button/index";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Insira seu nome")
      .min(2, "Nome deve ter 2 ou mais caracteres")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Digite apenas caracteres"
      ),
    lastname: yup
      .string()
      .required("Insira seu sobrenome")
      .min(2, "Sobrenome deve ter 2 ou mais caracteres")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Digite apenas caracteres"
      ),
    email: yup
      .string()
      .required("Insira seu e-mail")
      .email("Esse e-mail é inválido"),
    password: yup
      .string()
      .required("Insira uma senha válida")
      .min(8, "Mínimo de 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "Senha incorreta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = ({ name, lastname, email, password }) => {
    const userData = { name, lastname, email, password };
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
            label="Sobrenome"
            placeholder="Digite seu nome"
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
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
            label="Confirme sua senha"
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
        <Button type="submit">Cadastrar</Button>
      </Box>
    </RegisterContainer>
  );
};

export default Register;
