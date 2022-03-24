import styled from "styled-components";

export const Container = styled.div`
  margin-top: 155px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  div > h2 {
    transition: all 0.5s;
    margin-top: 10px;
    width: 80%;
    height: 45px;
    border: 3px solid var(--primary-color);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    color: var(--primary-color);
  }
  div > h2:hover {
    box-shadow: 0px 0px 10px black;
    color: var(--white-color);
    background-color: var(--primary-color);
  }

  img {
    border: 3px solid transparent;
    width: 50%;
    height: 50%;
    opacity: 50%;
    border-radius: 50%;
  }
  .developers {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .developers-ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .developers-ul > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: black;
  }
  .developers-ul > li:hover {
    color: var(--primary-color);
  }
  .developers-ul img:hover {
    opacity: 100%;
    transition: all 0.5s;
    border-radius: 50%;
    border: 3px solid var(--primary-color);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 768px) {
    transition: all 0.5s;
    .developers-ul {
      margin-top: 20px;
      flex-direction: row;
    }
  }
`;
