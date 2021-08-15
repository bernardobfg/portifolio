import { React} from 'react';
import { useProvider } from "../../Provider"
import HamburgerMenu from "react-hamburger-menu"
import { HeaderContainer, Menu, Li, ToggleDiv, Link, HamburgerBtn} from './styles';
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
            
            <HamburgerBtn
                isOpen={openMenu}
                menuClicked={() => setOpenMenu(!openMenu)}
                width={24}
                height={18}
                strokeWidth={1.5}
                rotate={0}
                color={themeName ==="light"? "#000" :"#fff"}
                borderRadius={0}
                animationDuration={0.5}
            />
            

            <ToggleDiv onClick={(e) => handleClick(e)} bg={icon} themeName={themeName}/>
        </HeaderContainer>
    );
}
 
export default Header;