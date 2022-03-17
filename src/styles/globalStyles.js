import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
main{
    display: flex;
    justify-content: center;
}
ul {
    margin: 0;
    padding: 0;
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
