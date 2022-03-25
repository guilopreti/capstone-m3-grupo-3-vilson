import ChangeImageContainer from "./styled";
import Button from "../../../components/Button/index";
import { useContext } from "react";

import { ChangeImageContext } from "../../../Providers/ChangeImage";

import { ChangeOpacityContext } from "../../../Providers/differentStates/index";

const ModalChangeImage = () => {
  const { setShowChangeImage, image, setImage, sendUserImage } =
    useContext(ChangeImageContext);
  const { setOpacity } = useContext(ChangeOpacityContext);

  const userLocal = JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"));

  const selectNewImage = (evt) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      let newImage = reader.result;
      setImage(newImage);
    });
    reader.readAsDataURL(evt.target.files[0]);
  };

  return (
    <ChangeImageContainer>
      <h1>Alterar foto do perfil</h1>
      <p>
        Selecione um arquivo de imagem jpg ou png com tamanho menor que 2 M para
        fazer upload.
      </p>
      <div className="changeImage-div-img">
        <form>
          <div className="change-div-input">
            <label htmlFor="changeImage">Escolher arquivo</label>

            <input
              type="file"
              id="changeImage"
              name="changeImage"
              onChange={(evt) => selectNewImage(evt)}
            />
          </div>
        </form>
        {image ? (
          <img
            className="changeImage-img"
            src={image}
            alt="Imagem"
            width="110"
            height="110"
          />
        ) : (
          <img
            className="changeImage-img"
            src={userLocal.user.img}
            alt="Imagem"
            width="110"
            height="110"
          />
        )}
      </div>
      <div className="changeImage-div-buttons">
        <Button
          cancel
          onClick={() => {
            sendUserImage();
            setShowChangeImage(false);
            setOpacity(false);
          }}
        >
          Salvar
        </Button>
        <Button
          cancel
          onClick={() => {
            setShowChangeImage(false);
            setOpacity(false);
            setImage("");
          }}
        >
          Cancelar
        </Button>
      </div>
    </ChangeImageContainer>
  );
};
export default ModalChangeImage;
