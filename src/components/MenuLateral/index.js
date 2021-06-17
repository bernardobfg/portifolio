import React, {useState} from 'react';
import { MenuContainer, ToggleDiv, Menu, Li} from './styles';
import { useProvider } from "../../Provider"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const MenuLateral = () => {
    const { themeName, setThemeName, openMenu} = useProvider();
    const [icon, setIcon] = useState(themeName === "light" ? Sun : Moon)
    
    const handleClick = async (e) => {
        e.preventDefault()
        localStorage.setItem("theme",themeName === "light" ? "dark" : "light")
        await setThemeName(themeName === "light" ? "dark" : "light")
        setIcon(icon === Sun ? Moon : Sun)
        
    }
    
    return (
        <MenuContainer open={openMenu}>
            <ToggleDiv onClick={(e) => handleClick(e)} bg={icon} themeName={themeName}>
            </ToggleDiv>
            <Menu>
                <Li selected>Sobre Mim</Li>
                <Li>Projetos</Li>
                <Li>Conhecimento</Li>
                <Li>Contato</Li>
            </Menu>
        </MenuContainer>
    );
}
 
export default MenuLateral;