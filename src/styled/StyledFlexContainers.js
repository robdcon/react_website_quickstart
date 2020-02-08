import styled from 'styled-components'
import { gradients } from './gradients/gradients'

export const StyledSection = styled.section`

    display:block;
    height:100%;
    width:100%;
    height:100vh;
    width:100vw;
    padding:0;
    margin:0;

`

export const StyledFlexBox = styled.div`

    display:flex;
    flex-direction:${(props) => (props.direction) ? props.direction : 'column'};
    justify-content:${(props) => (props.justify) ? props.justify : 'center' };
    align-items:${(props) => (props.align) ? props.align : 'center'};
    height:100%;
    width:100%;
    position:relative;

`

