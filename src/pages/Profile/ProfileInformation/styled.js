import styled from "styled-components";

export const ProfileTitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
    justify-content: space-between;
    width: 500px;
    @media (max-width: 520px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
    .profile-div-img {
      width: 100px;
      height: 100px;
      border-radius: 20px;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .profile-div-name{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 10px 0 10px;
    }
    h1 {
    @media (max-width: 520px) {
    margin-top: 10px;
  }

    margin: 0 0 5px 0;
    font-size: 20px;
    color: #343a40;
    font-weight: 500;
    @media (max-width: 520px) {
    font-size: 18px;
  }
  }
  h3 {
    font-size: 13px;
    color: #b3bac5;
    font-weight: 400;
  }
    .profile-div-edit {
      margin-top: 5px;
      display: flex;
      justify-content: flex-end;
      width: 85px;
      @media (max-width: 520px) {
    justify-content: start;
    margin-top: 15px;
  }
      span{
        display: flex;
      }
    }
  }
  .profileInformation-icon-pen{
    margin-right: 3px;
  }

  span {
    font-size: 11px;
    color: #1768ac;
    cursor: pointer;
    :hover {
      filter: brightness(75%);
      transition: 0.3s;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }

`;

const ProfileInformationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  font-family: "Inter", sans-serif;
  @media (max-width: 520px) {
    width: 90%;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    height: 40px;
    border-radius: 4px;
    padding: 12px 12px 12px 12px;
    background-color: #f7f7fa;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .profile-li-biography {
    height: auto;
    display: flex;
    align-items: flex-start;
  }
  p {
    color: #343a40;
    color: #b3bac5;
    color: gray;
    font-size: 13px;
  }
  span {
    font-size: 13px;
    color: #b3bac5;
    color: gray;
    color: #343a40;
    margin-right: 30px;
  }
`;
export default ProfileInformationContainer;
