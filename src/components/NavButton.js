import React, {Component} from 'react'
import StyledNavButton from '../styled/StyledNavButton'
import MenuIcon from '@material-ui/icons/Menu';

const NavButton = (props) =>
{
    return(
        <StyledNavButton width={props.width} open={props.open}>
           
            <span className="fa-stack fa-1x" onClick={props.handler}>
                <MenuIcon/>
                {/* <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className={`fas fa-plus fa-stack-1x fa-1x`}></i>  */}
               
            </span>
          
        </StyledNavButton>
    )
}

export default NavButton