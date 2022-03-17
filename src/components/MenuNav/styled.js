import styled from 'styled-components'

const MenuConteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin-bottom: 30px;
  background-color: #1768ac;
  box-shadow: 0 4px 34px -11px #343a40;
  @media (max-width: 460px) {
    padding-left: 10px;
  }

  ul {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 640px;
    align-items: center;

    @media (min-width: 460px) {
      justify-content: space-between;
      width: 440px;
    }
    @media (min-width: 560px) {
      width: 540px;
    }
    @media (min-width: 660px) {
      display: flex;
      justify-content: space-between;
      width: 640px;
    }

    @media (min-width: 880px) {
      width: 880px;
    }
    @media (min-width: 1100px) {
      width: 1080px;
    }
    @media (min-width: 1500px) {
      width: 1180px;
    }
    @media (min-width: 1600px) {
      width: 1280px;
    }
    @media (min-width: 1700px) {
      width: 1380px;
    }
    div {
      display: ${(props) => (props.isSearch ? 'flex' : 'none')};
      align-items: center;
      width: 220px;
      input {
        height: 22px;
        width: 100%;
        border: none;
        border-radius: 4px;
        padding-left: 5px;
        :focus {
          box-shadow: 0 0 0 0;
          outline: 0;
          color: #343a40;
        }
        ::placeholder {
          font-size: 10px;
        }
      }
      .menu-nav-icons-search {
        cursor: pointer;
        position: relative;
        right: 20px;
        color: #343a40;
      }
    }
  }
  li {
    display: flex;
    cursor: pointer;
    font-size: 11px;
    color: #343a40;
    color: #ffffff;
    @media (max-width: 460px) {
      display: none;
    }
    :hover {
      filter: brightness(75%);
      transition: 0.3s;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }
  }
  .menu-nav-icons {
    margin-right: 3px;
    @media (max-width: 460px) {
      display: none;
    }
  }
`

export default MenuConteiner
