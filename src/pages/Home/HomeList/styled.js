import styled from "styled-components";

export const HomeListPrimaryContainer = styled.section`
  margin-bottom: 50px;
  border-bottom: 2px rgb(241, 241, 242) solid;
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
  margin: 155px 0 50px 0;
  border-bottom: 2px rgb(241, 241, 242) solid;
`;
