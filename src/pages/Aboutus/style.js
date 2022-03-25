import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-top: 150px;
        margin-bottom: 10px;
        border-left: 3px solid var(--primary-color);
        padding: 0px 10px;
        color: var(--primary-color);
    }
    div {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h2 {
        color: var(--primary-color);;
        border-left: 3px solid var(--primary-color);
        padding: 0px 10px;
    }
    .developers-ul img {
      z-index: -1;
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
    .linkstosocial {
        display: flex;
        flex-direction: row;
        gap: 0px;
        justify-content: center;
    }
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
    text-align: center;
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
  }
  .sponsorship {
    cursor: pointer;
    margin-bottom: 20px;
    text-align: center;
    color: var(--picpay-color);
  }
  @media screen and (min-width: 768px) {
    .developers-ul {
      margin-top: 20px;
      flex-direction: row;
    }
`
