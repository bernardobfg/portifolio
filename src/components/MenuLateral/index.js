import React from 'react';
import { MenuContainer, Menu, Li, Link} from './styles';
import { useProvider } from "../../Provider"
import {FiPhone, FiUser, FiFolder, FiClipboard} from "react-icons/fi"
const MenuLateral = () => {
    const { openMenu} = useProvider();

    
    return (
        <MenuContainer open={openMenu}>
            
            <Menu>
                <Li>
                    <Link href="#sobreMim"><FiUser /> <span>Sobre Mim</span></Link>
                </Li>
                <Li>
                    <Link href="#projetos"><FiFolder /><span>Projetos</span></Link>
                </Li>
                <Li>
                    <Link href="#conhecimentos"><FiClipboard /><span>Conhecimentos</span></Link>
                </Li>
                <Li>
                    <Link href="#contato"> <FiPhone /> <span>Contato</span></Link>
                </Li>
            </Menu>
        </MenuContainer>
    );
}
 
export default MenuLateral;