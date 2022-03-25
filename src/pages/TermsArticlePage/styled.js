import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  line-height: 1.5;

  > div {
    width: 100%;
    max-width: 795px;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0px;
`;

export const Text = styled.p`
  margin-bottom: 15px;
  text-align: left;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StrongText = styled.p`
  font-weight: bold;
`;

export const List = styled.ul`
  margin-bottom: 15px;
`;

export const Item = styled.li`
  list-style-type: square;
  margin-left: 15px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 320px;
  margin-bottom: 25px;
  @media (min-width: 600px) {
    width: 320px;
  }
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #117788;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  padding: 5px;
  :hover {
    cursor: pointer;
    background-color: #1768ac;
  }
  :disabled {
    background-color: gray;
  }
`;
export default Button;
