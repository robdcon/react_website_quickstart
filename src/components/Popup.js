import React, {Component} from 'react'


export default class Popup extends Component
{
    render()
    {
        return(

            <div classname="Popup">
                {this.props.children}
            </div>
        )

    }

}