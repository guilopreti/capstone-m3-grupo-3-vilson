import MediumCardContainer from '../MediumCard/styled'
import styled from 'styled-components'

export const SmallCardContainer = styled(MediumCardContainer)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 526px;
  height: 190px;
  @media (max-width: 1100px) {
    height: 183px;
    width: 426px;
  }
  @media (max-width: 900px) {
    display: flex;
    height: 190px;
    width: 600px;
  }
  @media (max-width: 640px) {
    width: 95%;
  }
  @media (max-width: 480px) {
    max-height: 158px;
  }
  @media (max-width: 400px) {
    max-height: 126px;
    margin: 0 12px 12px 12px;
  }

  @media (min-width: 1500px) {
    width: 576px;
  }
  @media (min-width: 1600px) {
    width: 626px;
  }

  .mediumCard-div-img {
    width: 270px;
    height: 100%;
    @media (max-width: 900px) {
      width: 270px;
      height: 100%;
    }
    @media (max-width: 480px) {
      width: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 400px) {
      width: 160px;
    }
    @media (max-width: 370px) {
      width: 108px;
    }
    img {
      border-radius: 4px 0 0 4px;
    }
  }
  .mediumCard-div-main {
    padding: 7px 10px 7px 10px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 900px) {
      padding: 7px 10px 7px 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media (max-width: 480px) {
      padding: 7px 5px 7px 5px;
    }
  }
  .mediumCard-div-theme-title-paragraph {
    @media (max-width: 480px) {
      max-height: 210px;
    }
    @media (max-width: 400px) {
      max-height: 98px;
    }
  }
  .mediumCard-div-imgUser {
    width: 25px;
    height: 25px;
    @media (max-width: 900px) {
      width: 25px;
      height: 25px;
    }
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
    @media (max-width: 370px) {
      width: 16px;
      height: 16px;
      margin-right: 1px;
    }
  }
  .mediumCard-div-user {
    margin-bottom: 5px;
    > span {
      font-size: 10.5px;
      @media (max-width: 400px) {
        font-size: 9.5px;
      }
    }
    .mediumCard-span-data {
      @media (max-width: 400px) {
        font-size: 9.5px;
      }
    }
  }
  h2 {
    line-height: 23px;
    :hover {
      text-decoration: underline 1.5px;
    }
    @media (max-width: 900px) {
      line-height: 23px;
      font-size: 20px;
      margin-bottom: 5px;
    }
    @media (max-width: 480px) {
      line-height: 19px;
      font-size: 16px;
      margin-bottom: 5px;
    }
    @media (max-width: 400px) {
      margin-bottom: 0px;
      line-height: 17px;
      font-size: 15px;
    }
  }
  p {
    -webkit-line-clamp: 2;
    line-height: 20px;
    @media (max-width: 900px) {
      -webkit-line-clamp: 2;
      line-height: 20px;
      font-size: 17px;
    }
    @media (max-width: 480px) {
      -webkit-line-clamp: 1;
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
  .mediumCard-div-theme {
    margin-bottom: 0;
    @media (max-width: 900px) {
      margin-bottom: 0;
    }
    span {
      @media (max-width: 400px) {
        font-size: 9.5px;
      }
    }
    div {
      @media (max-width: 480px) {
        width: 75px;
        height: 16px;
      }
      @media (max-width: 400px) {
        width: 62px;
        height: 12px;
      }
      span {
        @media (max-width: 480px) {
          font-size: 7px;
        }
        @media (max-width: 400px) {
          font-size: 6.7px;
        }
      }
    }
  }
`
