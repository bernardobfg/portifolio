import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items:center;
    background: ${props => props.themeName==="light"? "rgba( 173, 171, 171, 0.10 )": "rgba( 32, 34, 37, 0.65 )"};
    box-shadow: 0 8px 15px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur(${props => props.themeName === "light" ?"0px": "20.0px"});
    -webkit-backdrop-filter: blur(${props => props.themeName === "light" ?"0px": "20.0px"});
    border-radius: 10px;
    border: 1px solid ${props=> props.selected? props.theme.primary: "rgba( 255, 255, 255, 0.18 )"};
 
    
    cursor: pointer;
    img{
        width: 90px;
    }
`
