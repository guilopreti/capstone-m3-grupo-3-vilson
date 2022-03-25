import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  article {
    width: 100%;
    max-width: 795px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
  }

  h1 {
    width: 100%;
    text-align: center;
    margin: 35px 0px;
  }

  textarea {
    margin-bottom: 5px;
    width: 100%;
    border: none;
    height: 365px;
    font-size: 17px;
    font-family: Inter, sans-serif;
    resize: none;
  }

  button {
    color: white;
    background-color: #117788;
    margin-bottom: 15px;
    width: 32%;
    max-width: 320px;
  }
`

export const SectionTexts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
  }

  span {
    color: red;
    font-family: 'Inter', sans-serif;
  }
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65px;
  margin-bottom: 15px;

  span {
    color: red;
    font-size: 15px;
  }

  label {
    margin-bottom: 5px;
    color: #117788;
  }

  input {
    height: 25px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
`

export const SectionImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 362px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    display: none;
  }

  label {
    background-color: #117788;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
  }

  button {
    color: white;
    background-color: #117788;
    margin-bottom: 15px;
    width: 136px;
  }
`
