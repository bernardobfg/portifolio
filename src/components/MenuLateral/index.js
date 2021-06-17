import React, {useState} from 'react';
import { MenuContainer, ToggleDiv} from './styles';
import { useProvider } from "../../Provider"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const MenuLateral = () => {
    const { themeName, setThemeName, openMenu} = useProvider();
    const [icon, setIcon] = useState(themeName === "light" ? Sun : Moon)
    
    const handleClick = async (e) => {
        e.preventDefault()
        await setThemeName(themeName === "light" ? "dark" : "light")
        setIcon(icon === Sun ? Moon : Sun)
        localStorage.setItem("theme",themeName)
    }
    
    return (
        <MenuContainer open={openMenu}>
            <ToggleDiv onClick={(e) => handleClick(e)}>
                <img src={icon} alt="toggleIcon"/>
            </ToggleDiv>
        </MenuContainer>
    );
}
 
export default MenuLateral;