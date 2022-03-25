import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 42px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.cancel ? "#ffffff" : "#1768ac")};
  color: ${(props) => (props.cancel ? "gray" : "#ffffff")};
  border: ${(props) => (props.cancel ? "1px solid #c5c5c5" : "none")};
  :active {
    filter: ${(props) => props.cancel && "unset"};
  }
  :hover {
    color: ${(props) => props.cancel && "#1768ac"};
    border: ${(props) => props.cancel && "solid 1px #1768ac"};
    filter: ${(props) => props.cancel && "unset"};
  }
  font-size: 15px;
  font-weight: 500;
  padding: 5px;
`;
export default ButtonStyle;
