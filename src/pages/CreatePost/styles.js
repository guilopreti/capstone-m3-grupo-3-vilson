import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 268px;
    text-align: center;
    margin: 35px 0px;
  }

  textarea {
    margin-bottom: 5px;
    width: 269px;
    border: none;
    height: 365px;
    font-size: 17px;
    font-family: Inter, sans-serif;
  }

  .resume-textarea {
    height: 50px;
    border: 1px solid black;
    padding: 5px;
    width: 269px;
    font-family: Inter, sans-serif;
  }
`;

export const SectionTexts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }

  span {
    color: red;
    font-family: "Inter", sans-serif;
  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 269px;
  height: 65px;
  margin-bottom: 15px;

  span {
    color: red;
    font-size: 15px;
  }

  label {
    margin-bottom: 5px;
    color: #117788;
  }

  input {
    height: 25px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export const SectionImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
  width: 269px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    display: none;
  }

  label {
    background-color: #3498db;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
  }
`;
