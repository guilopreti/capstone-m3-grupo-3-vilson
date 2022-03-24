import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPen } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MainProfile, ProfileContainer } from "./styled";
import Button from "../../../components/Button/index";
import { useContext } from "react";
import { UserContext } from "../../../Providers/users";
import { ProfileContext } from "../../../Providers/differentStates/index";
import { ChangeImageContext } from "../../../Providers/ChangeImage";

import { ChangeOpacityContext } from "../../../Providers/differentStates/index";

import ModalChangeImage from "../ModalChangeImage/index";
import { useHistory } from "react-router-dom";

const ChangeInformation = () => {
  const { changeUserInformation } = useContext(UserContext);
  const { setShowChangeInformation } = useContext(ProfileContext);
  const { isOpacity, setOpacity } = useContext(ChangeOpacityContext);
  const { showChangeImage, setShowChangeImage, image } =
    useContext(ChangeImageContext);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Insira seu nome e sobrenome")
      .min(2, "Nome deve ter no mínimo 8 caracteres")
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
    biography: yup.string(),
    password: yup
      .string()
      .required("Insira uma senha válida")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userLocal = JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"));
  // const userLocalImg = JSON.parse(localStorage.getItem("@CapstoneM3:userImg"));

  const history = useHistory();

  const onSubmit = (userDataUpdate) => {
    changeUserInformation(userDataUpdate, history);
  };

  return (
    <>
      <MainProfile isOpacity={isOpacity}>
        {showChangeImage && <ModalChangeImage />}
        <div className="profile-div-img-parent">
          <div className="profile-div-img">
            <img
              src={image ? image : userLocal.user.img}
              alt="Imagem de perfil"
              onClick={() => {
                setShowChangeImage(true);
                setOpacity(true);
              }}
            />
          </div>
          <div className="icon-pen-div">
            <FaPen
              className="icon-pen"
              onClick={() => {
                setShowChangeImage(true);
                setOpacity(true);
              }}
            />
          </div>
        </div>
        <ProfileContainer isOpacity={isOpacity}>
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
                defaultValue={userLocal.user.name}
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <TextField
                className="register-input"
                label="Biografia"
                defaultValue={userLocal.user.biography}
                multiline
                maxRows={4}
                {...register("biography")}
              />
              <p>{errors.biography?.message}</p>
              <TextField
                className="register-input"
                size="small"
                label="Username"
                defaultValue={userLocal.user.username}
                {...register("username")}
              />
              <p>{errors.username?.message}</p>
              <TextField
                className="register-input"
                size="small"
                label="E-mail"
                defaultValue={userLocal.user.email}
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <TextField
                className="register-input"
                size="small"
                label="Senha"
                placeholder="Digite sua senha"
                {...register("password")}
                type="password"
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="profile-div-button">
              <Button type="submit">Salvar</Button>
              <Button
                cancel
                onClick={() => {
                  setShowChangeInformation(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </ProfileContainer>
      </MainProfile>
    </>
  );
};
export default ChangeInformation;
