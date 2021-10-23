import { React} from 'react';
import { useProvider } from "../../Provider"
import { HeaderContainer, Menu, Li,  Link, HamburgerBtn} from './styles';
import {ToggleBtn} from '../ToggleBtn';

const Header = () => {
    const { openMenu, setOpenMenu, themeName } = useProvider();

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
                color={themeName ==="light"? "#fff" :"#fff"}
                borderRadius={0}
                animationDuration={0.5}
            />
            
            <ToggleBtn/>
        </HeaderContainer>
    );
}
 
export default Header;