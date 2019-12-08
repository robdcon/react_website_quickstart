import React, {Component} from 'react'


export default class PortfolioItem extends Component
{
    render()
    {
        return(

            <div classname="PortfolioItem">
                {this.props.children}
            </div>
        )

    }

}