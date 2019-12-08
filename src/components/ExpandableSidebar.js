import React, { Component } from 'react';

// Styled Components
import StyledSidebar from '../styled/StyledSidebar'
import StyledSection from '../styled/StyledSection'
import NavButton from './NavButton'


class ExpandableSidebar extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            open:false,
            width:50
        }
    }

    toggle = () =>
    {
        console.log("toggle")
        this.setState((prevState) =>
        {
           return { open:!prevState.open}
        })
    }

    render() 
    {
      return (
            
            <div className="expandable-sidebar">
               
                <StyledSidebar open={this.state.open} width={this.state.width}>
                    <StyledSection>
                        <NavButton handler={this.toggle} width={this.state.width} open={this.state.open}/>
                       
                            {this.props.children}
                       
                    </StyledSection>
                </StyledSidebar>

            </div>  
             
      )
    }
  }
  
  export default ExpandableSidebar;