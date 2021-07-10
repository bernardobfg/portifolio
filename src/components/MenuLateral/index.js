import React from 'react';
import { MenuContainer, ToggleDiv, Menu, Li, Link} from './styles';
import { useProvider } from "../../Provider"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const MenuLateral = () => {
    const { themeName, setThemeName, openMenu, icon, setIcon} = useProvider();
    
    const handleClick = async (e) => {
        e.preventDefault()
        localStorage.setItem("theme",themeName === "light" ? "dark" : "light")
        await setThemeName(themeName === "light" ? "dark" : "light")
        await setIcon(icon === Sun ? Moon : Sun)
    }
    
    return (
        <MenuContainer open={openMenu}>
            <ToggleDiv onClick={(e) => handleClick(e)} bg={icon} themeName={themeName}></ToggleDiv>
            <Menu>
                <Li><Link href="#sobreMim">Sobre Mim</Link></Li>
                <Li><Link href="#projetos">Projetos</Link></Li>
                <Li><Link href="#conhecimentos">Conhecimentos</Link></Li>
            </Menu>
        </MenuContainer>
    );
}
 
export default MenuLateral;