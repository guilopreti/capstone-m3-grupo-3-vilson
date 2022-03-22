import styled from "styled-components";

const ChangeImageContainer = styled.section`
  font-family: "Inter", sans-serif;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 25px 15px 25px 15px;
  box-shadow: 0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  border-radius: 4px;
  background-color: #fafbfc;
  background-color: #fff;
  z-index: 1;

  h1 {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #343a40;
  }
  p {
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
    color: gray;
    color: #747487;
  }

  #changeImage {
    cursor: pointer;
    display: none;
  }
  .change-div-input {
    cursor: pointer;
    width: 150px;
    height: 27px;
    margin-bottom: 5px;
    label {
      border: 1px solid #c5c5c5;
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 4px;

      width: 100%;
      height: 100%;
      font-size: 12px;
      :hover {
        border: 1px solid #1768ac;
        color: #1768ac;
      }
    }
  }

  .changeImage-div-img {
    width: 150px;
    height: 150px;
    border-radius: 4px;
    margin-bottom: 38px;
  }
  .changeImage-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  .changeImage-div-buttons {
    width: 100%;
    display: flex;
    button + button {
      margin-left: 6px;
    }
  }
`;

export default ChangeImageContainer;
