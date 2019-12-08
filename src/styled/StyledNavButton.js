import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavButton = styled.div`

    position:absolute;
    top:1em;
    width:50px;
    height:50px;
    color:#fff;
    right: ${(props) =>  props.open ?  0 : `-50px`}
    margin-left: ${(props) => props.open ? 0 : "100px"};
    background-color: transparent;
    z-index:9999;
    transition: all .333s;
    cursor:pointer;
    


`
export default StyledNavButton
