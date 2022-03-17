import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}


body, html {
 font-family: 'Roboto', sans-serif;
}

li {
    list-style: none;
  }
    button{
        cursor: pointer;
        :hover {
        filter: brightness(75%);
        transition: 0.3s;
        }
        :active {
        filter: brightness(1.6);
        transition: 0.3s;
    }

    }


`;
export default GlobalStyle;
