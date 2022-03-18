import RegisterContainer, { RegisterMain } from "./styled";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Button/index";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";

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
    api
      .post("/users", userData)
      .then((_) => {
        toast.success("Cadastro realizado com sucesso");
        history.push("/login");
      })
      .catch((_) => {
        toast.error("Falha ao tentar realizar o cadastro");
      });
  };

  return (
    <>
      <HeaderHome />
      <MenuNav />
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
              <Link className="Link" to="/login">
                <h3 className="login-h3-border">Faça o login</h3>
              </Link>
            </div>
            <Button type="submit">Cadastrar</Button>
          </Box>
        </RegisterContainer>
      </RegisterMain>
    </>
  );
};

export default Register;
