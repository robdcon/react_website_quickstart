import React, { Component } from 'react';
import { StyledFlexSection } from '../styled/StyledFlexContainers';
import TweenComponent from '../components/TweenComponent';


const Test = (props) => {

    return (
    <StyledFlexSection {...props} >
        <TweenComponent />
    </StyledFlexSection>
    );
}
  
export default Test;