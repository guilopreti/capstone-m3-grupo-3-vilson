import styled from "styled-components";
import { RegisterContainer } from "../../Register/styled";

export const MainProfile = styled.main`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  .profile-div-img-parent {
    margin-top: 155px;
    display: flex;
  }
  .profile-div-img {
    opacity: ${(props) => (props.isOpacity ? "0.3" : "unset")};
    width: 110px;
    height: 110px;
    border-radius: 20px;
    background-size: cover;
    :hover {
      filter: brightness(75%);
      transition: 0.1s;
    }

    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  .icon-pen-div {
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: 28px;
    height: 28px;
    right: 68px;
    top: 43px;
    border-radius: 4px;
    :active {
      transition: 0.1s;
      background-color: #e0f0fe;
    }
  }
  .icon-pen {
    opacity: 0;
    width: 100%;
    height: 100%;
    :hover {
      color: #1768ac;
      opacity: unset;
    }
  }
`;

export const ProfileTitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  width: 500px;
  .profile-div-edit {
    display: flex;
    justify-content: flex-end;
    width: 85px;
  }
`;

export const ProfileContainer = styled(RegisterContainer)`
  margin-top: 0;
  opacity: ${(props) => (props.isOpacity ? "0.3" : "unset")};
  box-shadow: 0 0 0 0;
  width: 400px;
  @media (max-width: 420px) {
    width: 90%;
  }
  .register-input {
    margin-bottom: 20px;
  }
  .profile-div-button {
    display: flex;
    button {
      width: 90px;
      height: 35px;
    }
    button + button {
      margin-left: 10px;
    }
  }
`;
