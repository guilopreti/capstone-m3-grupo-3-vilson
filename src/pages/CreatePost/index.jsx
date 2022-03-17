import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";

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
    <section>
      <header>
        <h2>Crie seu post</h2>
        <Button onClick={sendPost}>Publicar</Button>
        <span>{user.user.name}</span>
      </header>
      <article>
        <h1 contentEditable onKeyUp={(evt) => setTitle(evt.target.innerText)}>
          Titulo
        </h1>
        <p contentEditable onKeyUp={(evt) => setText(evt.target.innerText)}>
          Escreva aqui...
        </p>
        <div>
          <label>Fonte:</label>
          <input required onChange={(evt) => setFont(evt.target.value)} />
        </div>
        <div>
          <label>Tema:</label>
          <input required onChange={(evt) => setTheme(evt.target.value)} />
        </div>
        <input type={"file"} onChange={(evt) => mostrarImagem(evt)} />
        <p contentEditable onKeyUp={(evt) => setResume(evt.target.innerText)}>
          Escreva aqui um breve resumo...
        </p>
      </article>
    </section>
  );
};

export default CreatePost;
