import { RegisterContainer, RegisterMain } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../Providers/users";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button/index";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import { useHistory } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Insira seu nome completo")
      .min(2, "Nome deve ter no mínimo 2 caracteres")
      .max(35, "Nome deve ter no máximo 35 caracteres")
      .matches(
        "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Digite apenas caracteres"
      ),
    username: yup
      .string()
      .required("Insira seu nome de usuário")
      .min(2, "Nome de usuário deve ter no mínimo 2 caracteres")
      .max(25, "Nome de usuário deve ter no máximo 25 caracteres"),
    email: yup
      .string()
      .required("Insira seu e-mail")
      .email("Esse e-mail é inválido"),
    password: yup
      .string()
      .required("Insira uma senha válida")
      .min(6, "Mínimo de 6 caracteres"),
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

  const { handleUserRegister } = useContext(UserContext);

  const onSubmit = ({ name, username, email, password }) => {
    const userData = { name, username, email, password };
    handleUserRegister(userData, history);
  };

  return (
    <>
      <HeaderHome />
      <MenuNav hiddenSearch hiddenMyAccount />
      <RegisterMain>
        <RegisterMain>
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
                  label="Nome completo"
                  placeholder="Digite seu nome e sobrenome"
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>
                <TextField
                  className="register-input"
                  size="small"
                  label="Username"
                  placeholder="Digite seu nome de usuário"
                  {...register("username")}
                />
                <p>{errors.username?.message}</p>
                <TextField
                  className="register-input"
                  size="small"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
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
                <Link className="Link" to="/login">
                  <h3 className="login-h3-border">Faça o login</h3>
                </Link>
              </div>
              <Button type="submit">Cadastrar</Button>
            </Box>
          </RegisterContainer>
        </RegisterMain>
      </RegisterMain>
    </>
  );
};

export default Register;

// const onSubmit = ({ name, lastname, username, email, password }) => {
//   const userData = { name, lastname, username, email, password };
//   api
//     .post("/users", userData)
//     .then((_) => {
//       toast.success("Cadastro realizado com sucesso");
//       history.push("/login");
//     })
//     .catch((_) => {
//       toast.error("Falha ao tentar realizar o cadastro");
//     });
// };
