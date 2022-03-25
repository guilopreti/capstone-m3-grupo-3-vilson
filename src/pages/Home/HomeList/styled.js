import styled from "styled-components";

export const HomeListTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 7px;
  font-family: "Poppins", sans-serif;
  border-left: solid 4px #1768ac;
  height: 43px;
  color: rgb(15, 25, 35);
  font-size: 13.5px;
  font-weight: 100;
  @media (max-width: 900px) {
    width: 601px;
  }

  @media (max-width: 640px) {
    width: 93%;
  }
  @media (min-width: 900px) {
    width: 874px;
  }
  @media (min-width: 1100px) {
    width: 1075px;
  }
  @media (min-width: 1500px) {
    width: 1174px;
  }
  @media (min-width: 1600px) {
    width: 1272px;
  }
`;
export const HomeListTitleTop = styled(HomeListTitle)`
  margin: 155px 0 0px 0;
`;

export const HomeListPrimaryContainer = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (min-width: 930px) {
    width: 900px;
  }
  @media (min-width: 1100px) {
    width: 1102px;
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
  @media (min-width: 1600px) {
    width: 1300px;
  }
  .primary-ul-bigCard {
  }
  .primary-ul-smallCard {
    display: flex;
    flex-direction: column;
  }
`;

const HomeListContainer = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 640px) {
    width: 98%;
  }
  @media (min-width: 900px) {
    width: 900px;
  }
  @media (min-width: 1100px) {
    width: 1102px;
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
    flex-wrap: wrap;
  }
`;
export default HomeListContainer;

export const HomeListContainerTop = styled(HomeListContainer)`
  margin-top: 30px;
  margin-bottom: 30px;
`;
