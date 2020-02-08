import React from 'react';
import { StyledSection, StyledFlexBox } from '../styled/StyledFlexContainers';


const Section = (props) => {
    
   console.log(props)
    
    return (
    <StyledSection {...props} >
        <StyledFlexBox>
        {props.children}
        </StyledFlexBox>
    </StyledSection>
    );
}
  
export default Section;