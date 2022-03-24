import styled from "styled-components";

export const Container = styled.div`
  margin-top: 155px;
  margin-bottom: 100px;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 20px;
	line-height: 1.5;
`

export const Title = styled.h2`
	width: 80vw;
	margin: 10px 0px;
`

export const Text = styled.p`
	width: 80vw;
	margin-bottom: 15px;
	text-align: justify;
`

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 60vw;
	margin-bottom: 40px;
`

export const StrongText = styled.p`
	font-weight: bold;
`

export const List = styled.ul`
	width: 80vw;
	margin-bottom: 15px;
`

export const Item = styled.li`
	width: 75vw;
	list-style-type: square;
	margin-left: 15px;
`

const Button = styled.button`
  margin-top: 10px;
  width: 80vw;
	@media (min-width: 600px) {
		width: 320px;
	}
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #117788;
  color: white;
  font-size: 18px;
  font-weight: bold;
	font-family: 'Inter', sans-serif;
  padding: 5px;
	:hover{
		cursor: pointer;
		background-color: #1768AC;
	}
	:disabled{
		background-color: gray;
	}
`;
export default Button;