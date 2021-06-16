import React, {useState} from 'react';
import { HeaderContainer, ToggleDiv, } from './styles';
import { useTheme } from "../../SetThemeProvider"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const Header = () => {
    const { themeName, setThemeName } = useTheme();
    const [icon, setIcon] = useState(themeName === "light" ? Sun : Moon)
    const handleClick = (e) => {
        e.preventDefault()
        setIcon(icon === Sun? Moon: Sun)
        setThemeName(themeName === "light" ? "dark" : "light")
    }
    return (
        <HeaderContainer>
            <ToggleDiv onClick={(e) => handleClick(e)} themeName={themeName}>
                    <img src={icon}/>
            </ToggleDiv>
        </HeaderContainer>
    );
}
 
export default Header;