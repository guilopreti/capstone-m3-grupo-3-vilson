import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  width: 16px;
  height: 16px;
	background-color: #FFFFFF;
	margin: 0px 15px;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
	overflow: hidden;
	white-space: nowrap;
	width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
	border: 0;
	position: absolute;
	clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.label`
	display: flex;
	align-items: center;
	margin-top: 2.5px;;
  width: 16px;
  height: 16px;
	background-color: ${props => props.checked ? '#FFFFFF' : '#C4C4C4'};
	padding: 0;
	border: 2px black solid;
	${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

