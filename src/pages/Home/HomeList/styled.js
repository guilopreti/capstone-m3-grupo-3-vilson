import styled from "styled-components";

const HomeListContainer = styled.section`
  /* @media (max-width: 768px) {
    width: 95%;
  }
  @media (min-width: 768px) {
    width: 780px;
  } */
  @media (max-width: 640px) {
    width: 98%;
  }
  /* @media (max-width: 880px) {
    width: 370px;
    width: 800px;
  } */
  @media (min-width: 880px) {
    width: 900px;
  }
  @media (min-width: 1100px) {
    width: 1100px;
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
  @media (min-width: 1600px) {
    width: 1300px;
  }
  @media (min-width: 1700px) {
    width: 1400px;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 880px) {
      flex-wrap: wrap;
    }
  }
`;
export default HomeListContainer;
