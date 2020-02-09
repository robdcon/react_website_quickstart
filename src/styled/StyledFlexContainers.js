import styled from 'styled-components'


export const StyledSection = styled.section`

    display:block;
    height:100%;
    width:100%;
    height:100vh;
    width:100vw;
    padding:0;
    margin:0;
    background-image: ${props => props.backgroundImage ? props.backgroundImage : 'none'}

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

