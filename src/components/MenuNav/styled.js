import styled from 'styled-components'
const MenuConteiner = styled.section`
  position: fixed;
  margin-top: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  margin-bottom: 30px;
  background-color: #1768ac;
  box-shadow: 0 4px 34px -11px #343a40;

  ul {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    @media (min-width: 768px) {
      justify-content: space-between;
      width: 760px;
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
    .menu-nav-div-menu {
      display: flex;
    }
    .menu-nav-div-input {
      display: flex;
      margin-left: -22px;
      align-items: center;
      width: 270px;
      height: 30px;
      display: ${(props) => (props.hiddenSearch ? 'none' : 'flex')};
      @media (min-width: 768px) {
        margin-left: -152px;
      }
      @media (min-width: 880px) {
        margin-left: -173px;
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 4px;
        padding-left: 5px;
        :focus {
          box-shadow: 0 0 0 0;
          outline: 0;
          color: #343a40;
        }
        ::placeholder {
          font-size: 13px;
        }
      }
      .menu-nav-icons-search {
        cursor: pointer;
        position: relative;
        right: 20px;
        color: #343a40;
        :hover {
          filter: brightness(75%);
          transition: 0.3s;
        }
        :active {
          filter: brightness(1.6);
          transition: 0.3s;
        }
      }
    }
  }
  li {
    display: flex;
    cursor: pointer;
    font-size: 11px;
    color: #ffffff;
    @media (max-width: 768px) {
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
  .Link {
    text-decoration: none;
  }
  .Link + .Link {
    margin-left: 20px;
    @media (max-width: 880px) {
      margin-left: 13px;
    }
  }
  .menu-nav-icons {
    margin-right: 3px;
    @media (max-width: 460px) {
      display: none;
    }
  }
  .menu-nav-li-hidden {
    div {
      display: flex;
    }
    width: 78px;
    display: ${(props) => (props.hiddenMyAccount ? 'none' : 'flex')};
    @media (max-width: 768px) {
      display: none;
    }
  }
  .menu-nav-icons-hidden {
  }
`

export default MenuConteiner
