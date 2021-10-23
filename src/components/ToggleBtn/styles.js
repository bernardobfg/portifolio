import styled from 'styled-components';

const defineGradient = (themeName) => {
  if (themeName === 'light') {
    return "90deg, rgba(5,5,55,1) 0%, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%"
  }
  return "90deg, rgba(115,64,187,0.9612219887955182) 44%, rgba(85,60,128,1) 80%, rgba(70,40,120,1) 100%"
}

export const ToggleDiv = styled.div`
    cursor: pointer;
    width: 40px;
    height: 18px;
    border-radius: 50px;
    padding: 2px;
    background-color: ${props => props.theme.primary};
    display: flex;
    margin-right: 50px;
    align-items:center;
    justify-content: ${props => props.themeName === "light" ? 'flex-start': 'flex-end'};
    span{
      width: 20px;
      height: 20px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      z-index: 10;
      align-items:center;
      background: linear-gradient(${props => defineGradient(props.themeName)} );
      img{
        width: 18px;
        height: 18px;
      }
    }
`

