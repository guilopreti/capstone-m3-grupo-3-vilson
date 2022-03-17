import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import { Container } from "./styles";

const CreatePost = () => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("Titulo");
  const [text, setText] = useState("Escreva aqui...");
  const [font, setFont] = useState("");
  const [theme, setTheme] = useState("");
  const [image, setImage] = useState([]);
  const [resume, setResume] = useState("Escreva aqui um breve resumo...");

  const sendPost = () => {
    const post = {
      title,
      text,
      font,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      image,
      theme,
      resume,
      votes: [],
      media: null,
      userId: user.user.id,
    };
    console.log(post);
  };

  const mostrarImagem = (evt) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      let newImage = reader.result;
      setImage([...image, newImage]);
    });
    reader.readAsDataURL(evt.target.files[0]);
  };

  return (
    <Container>
      <input
        placeholder="Título"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        placeholder="Conte sua história..."
        onChange={(evt) => setText(evt.target.value)}
      />
      <div>
        <label>Fonte:</label>
        <input required onChange={(evt) => setFont(evt.target.value)} />
      </div>
      <div>
        <label>Tema:</label>
        <input required onChange={(evt) => setTheme(evt.target.value)} />
      </div>
      <input type={"file"} onChange={(evt) => mostrarImagem(evt)} />
      <input
        placeholder="Escreva um breve resumo..."
        onChange={(evt) => setResume(evt.target.value)}
      />
      <Button onClick={sendPost}>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
