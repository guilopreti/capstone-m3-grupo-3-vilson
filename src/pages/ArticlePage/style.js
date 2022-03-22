import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px 20px;

  img {
    max-height: 420px;
  }
`;

export const HeaderPost = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 0;

  ${up("md")} {
    max-width: 768px;
  }
`;

export const DateTemaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 12px;
    color: var(--grey-color);
  }
`;

export const TemaContainer = styled.div`
  width: 65px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--primary-color);
  border-radius: 20px;

  span {
    font-size: 12px;
    color: var(--white-color);
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  h3 {
    font-size: 25px;
    font-weight: 500;
    border-left: 4px solid var(--primary-color);
  }

  p {
    font-size: 12px;
    font-weight: regular;
    margin-top: 10px;
  }
`;

export const ImgTextContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 488px;
    display: inline-block;
    border-radius: 5px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: justify;
  font-size: 16px;
  font-weight: regular;

  p {
    text-indent: 35px;
    margin-bottom: 10px;
  }
`;

export const FontContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  text-align: left;
  margin-top: 15px;

  > span {
    font-size: 16px;
    font-weight: 500;
    color: red;

    > span {
      color: black;
      text-decoration: underline;
    }
  }
`;

export const UserVoteContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 120px;
    height: 90px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      color: black;
    }

    > div {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;

  figure {
    width: 80%;
    max-width: 400px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    figcaption {
      display: none;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 80%;
    max-width: 400px;
  }
`;
