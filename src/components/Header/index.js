import React, {useState} from 'react';
import { HeaderContainer, ToggleDiv, Lines, Line1, Line2, Line3} from './styles';
import { useTheme } from "../../SetThemeProvider"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const Header = () => {
    const { themeName, setThemeName } = useTheme();
    const [icon, setIcon] = useState(themeName === "light" ? Sun : Moon)
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setIcon(icon === Sun? Moon: Sun)
        setThemeName(themeName === "light" ? "dark" : "light")
    }
    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
    return (
        <HeaderContainer>
            <Lines  onClick={(e) => handleOpen(e)}>
                <Line1 open={open}/>
                <Line2 open={open}/>
                <Line3 open={open}/>
            </Lines>

            <ToggleDiv onClick={(e) => handleClick(e)} themeName={themeName}>
                    <img src={icon} alt="toggleIcon"/>
            </ToggleDiv>
        </HeaderContainer>
    );
}
 
export default Header;