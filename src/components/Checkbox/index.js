import React from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './styled';

const Checkbox = ({ checked, handleCheckboxChange }) => {

   return (
      <CheckboxContainer 
      	checked={checked}
      	onClick={handleCheckboxChange}>
   			<HiddenCheckbox 
      		onChange={handleCheckboxChange}
      		checked={checked}
   				/>
   				<StyledCheckbox checked={checked}>
   				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
					</Icon>
					</StyledCheckbox>
   		</CheckboxContainer>
		 );
}
export default Checkbox;