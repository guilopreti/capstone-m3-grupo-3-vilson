import styled from 'styled-components'

const MediumCardContainer = styled.li`
  cursor: pointer;
  font-family: 'Poppins' sans-serif;
  margin: 0 12px 24px 12px;
  width: 343px;
  border: 1px solid #dddfe2;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: 1100px) {
    width: 276px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (min-width: 1500px) {
    width: 376px;
  }
  @media (min-width: 1600px) {
    width: 409px;
  }

  .mediumCard-div-img {
    width: 100%;
    height: 200px;
    @media (max-width: 1100px) {
      height: 180px;
    }
    @media (max-width: 900px) {
      height: 320px;
    }
    @media (max-width: 640px) {
      height: 290px;
    }
    @media (max-width: 500px) {
      height: 210px;
    }
    @media (max-width: 410px) {
      height: 200px;
    }
    @media (max-width: 370px) {
      height: 180px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
    }
  }
  .mediumCard-div-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    @media (max-width: 880px) {
      padding: 25px;
    }
    @media (max-width: 500px) {
      padding: 15px;
    }
    @media (max-width: 410px) {
      padding: 10px;
    }
  }
  .mediumCard-div-theme-title-paragraph {
    height: 178px;
    margin-bottom: 5px;
    @media (max-width: 1100px) {
      height: 175px;
    }
    @media (max-width: 880px) {
      height: 240px;
    }
    @media (max-width: 500px) {
      height: 210px;
    }
    @media (max-width: 410px) {
      height: 174px;
    }
  }
  .mediumCard-div-theme {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: 880px) {
      margin-bottom: 20px;
    }
    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px gray solid;
      width: 80px;
      height: 18px;
      background-color: #1768ac;
      border-radius: 50px;
      border: none;
      margin-right: 30px;
      span {
        color: #ffffff;
        font-size: 8.5px;
      }
    }
    span {
      color: #cccccc;
      font-size: 9.5px;
      @media (max-width: 880px) {
        font-size: 10.5px;
      }
    }
  }
  h2 {
    margin-bottom: 5px;
    font-family: 'Poppins', sans-serif;
    color: rgba(25, 25, 25, 1);
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    :hover {
      text-decoration: underline 1.5px;
    }
    @media (max-width: 1100px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (max-width: 880px) {
      font-size: 27px;
      line-height: 32px;
      margin-bottom: 15px;
    }
    @media (max-width: 500px) {
      font-size: 23px;
      line-height: 28px;
      margin-bottom: 10px;
    }
    @media (max-width: 410px) {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 5px;
    }
  }
  p {
    font-family: 'Poppins', serif;
    font-family: 'Times New Roman', Times, serif;
    color: rgba(41, 41, 41, 1);
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media (max-width: 1100px) {
      font-size: 14.5px;
      line-height: 20px;
    }
    @media (max-width: 880px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media (max-width: 410px) {
      font-size: 15px;
      line-height: 22px;
    }
  }
  .mediumCard-div-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: rgba(25, 25, 25, 1);
      @media (max-width: 410px) {
        font-size: 12px;
      }
    }
    .mediumCard-span-data {
      color: #cccccc;
      font-size: 9.5px;
      margin-right: 10px;
      @media (max-width: 880px) {
        font-size: 10.5px;
      }
    }
  }
  .mediumCard-div-imgUser {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
`

export default MediumCardContainer
