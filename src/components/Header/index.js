import { React} from 'react';
import { useProvider } from "../../Provider"
import { HeaderContainer, Menu, Li, Lines, Line1, Line2, Line3, ToggleDiv, Link} from './styles';
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"

const Header = () => {
    const { openMenu, setOpenMenu, themeName, setThemeName, icon, setIcon } = useProvider();
    const handleOpen = (e) => {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        localStorage.setItem("theme",themeName === "light" ? "dark" : "light")
        await setThemeName(themeName === "light" ? "dark" : "light")
        await setIcon(icon === Sun ? Moon : Sun)
    }
    return (
        <HeaderContainer>
            <Menu>
                <Li><Link href="#sobreMim">Sobre Mim</Link></Li>
                <Li><Link href="#projetos">Projetos</Link></Li>
                <Li><Link href="#conhecimentos">Conhecimentos</Link></Li>
                <Li><Link href="#contato">Contato</Link></Li>
            </Menu>
            
            <Lines  onClick={(e) => handleOpen(e)}>
                <Line1 open={openMenu}/>
                <Line2 open={openMenu}/>
                <Line3 open={openMenu}/>
            </Lines>

            <ToggleDiv onClick={(e) => handleClick(e)} bg={icon} themeName={themeName}/>
        </HeaderContainer>
    );
}
 
export default Header;