import ChangeImageContainer from "./styled";
import Button from "../../../components/Button/index";
import { useContext, useState } from "react";
import ImageProfile from "../../../assets/image/elon-musk.jpg";
import { ChangeImageContext } from "../../../Providers/ChangeImage";

import { ChangeOpacityContext } from "../../../Providers/differentStates/index";

const ModalChangeImage = () => {
  // const [endImg] = useState();

  const { setShowChangeImage, image, setImage, sendUserImage } =
    useContext(ChangeImageContext);
  const { setOpacity } = useContext(ChangeOpacityContext);

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
            <label for="changeImage">Escolher arquivo</label>

            <input
              type="file"
              id="changeImage"
              name="changeImage"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </form>
        {image ? (
          <img
            className="changeImage-img"
            src={URL.createObjectURL(image)}
            alt="Imagem"
            width="110"
            height="110"
          />
        ) : (
          <img
            className="changeImage-img"
            src={ImageProfile}
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
          }}
        >
          Cancelar
        </Button>
      </div>
    </ChangeImageContainer>
  );
};
export default ModalChangeImage;
