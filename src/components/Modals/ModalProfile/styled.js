import styled from "styled-components";

export const MainModal = styled.main`
  display: flex;
  justify-content: center;
`;

const ModalProfileContainer = styled.ul`
  display: flex;
  position: fixed;
  right: 6px;
  top: 124px;
  font-family: "Inter", sans-serif;
  flex-direction: column;
  width: 270px;
  height: auto;
  padding: 5px 0px 12px 0px;
  box-shadow: 0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fafbfc;
  background-color: #fff;
  hr {
    margin: 0 10px 0 10px;
    border-width: 0;
    height: 1px;
    background-color: #dddfe2;
  }
  .modal-perfil-conta {
    display: flex;
    justify-content: flex-end;
    color: gray;
    height: 30px;
    cursor: unset;
    :hover {
      background-color: #fafbfc;
      color: gray;
    }
    :active {
      filter: unset;
    }
  }
  .modal-perfil-conta-title {
    text-align: center;
    margin-right: 99px;
  }
  .modal-perfil-conta-x {
    cursor: pointer;
    margin: 0 12px 4px 0;
    font-size: 15px;
    :hover {
      filter: brightness(75%);
      transition: 0.3s;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }
  }
  li {
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 13.5px;
    font-weight: 500;
    color: #343a40;
    cursor: pointer;
    :hover {
      background-color: #1768ac;
      color: #ffffff;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }
  }
  span {
    margin-left: 12px;
  }
  .modal-perfil-span-name {
    margin: -8px 0 0 0;
    font-size: 16px;
    font-weight: 500;
  }
  .modal-perfil-span-email {
    margin-left: 0;
    font-size: 11px;
    color: #b3bac5;
  }
  .modal-perfil-li-container {
    margin: 15px 0 15px 0;
    display: flex;
    height: auto;
    cursor: unset;
    :hover {
      background-color: #fafbfc;
      color: #343a40;
    }
    :active {
      filter: unset;
    }
    .modal-perfil-div-img {
      margin: 0 8px 0 12px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .modal-perfil-div-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .Link {
    text-decoration: none;
  }
`;
export default ModalProfileContainer;
