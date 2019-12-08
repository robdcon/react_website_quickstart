import styled from 'styled-components';

const StyledSidebar = styled.div`

    position:fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    height:100%;
    width: ${(props) => `${props.width}%`};
    margin-left: ${(props) => props.open ? 0 : `-${props.width}%`};
    background-color: #000000;
    z-index:9999;
    transition: margin .33s;
    


`

export default StyledSidebar