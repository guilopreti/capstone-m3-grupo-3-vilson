import styled from "styled-components";

export const RegisterMain = styled.main`
  display: flex;
  justify-content: center;
`;

const RegisterContainer = styled.section`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 25px 15px 25px 15px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 4px 34px -20px #6c757d;

  h2 {
    margin: 0 0 15px 0;
    font-size: 18px;
    color: #6c757d;
    text-align: center;
  }
  p {
    margin: -9px 0 5px 3px;
    font-size: 10px;
    color: rgb(212, 32, 32);
    text-align: left;
  }
  .register-input {
    width: 100%;
    margin-bottom: 11px;
  }
  .login-div-warning {
    display: flex;
    justify-content: space-around;
  }
  h3 {
    font-size: 9px;
    font-weight: 500;
    margin: 0;
    color: #263238;
  }
  .login-h3-border {
    margin-top: -1px;
    cursor: pointer;
    color: #dd2738;

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
    color: #dd2738;
  }
`;

export default RegisterContainer;
