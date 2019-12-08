import React, {Component} from 'react'
import StyledPageWrapper from '../styled/StyledPageWrapper'
import NavBar from '../components/NavBar'

class PageWrapper extends Component
{
    render()
    {
        return(

            <StyledPageWrapper className="wrapper">
                <NavBar />
                {this.props.children}
            </StyledPageWrapper>
        )

    }

}

export default PageWrapper