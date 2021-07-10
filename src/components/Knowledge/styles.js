import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 150px;
    display:flex;
    justify-content: center;
    align-items:center;
    background: rgba( 32, 34, 37, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    border-radius: 10px;
    border: 1px solid ${props=> props.selected? props.theme.primary: "rgba( 255, 255, 255, 0.18 )"};
    cursor: pointer;
    img{
        width: 90px;
    }
`
