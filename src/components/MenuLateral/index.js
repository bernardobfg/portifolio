import React from 'react';
import { MenuContainer, Menu, Li, Link} from './styles';
import { useProvider } from "../../Provider"

const MenuLateral = () => {
    const { openMenu} = useProvider();

    
    return (
        <MenuContainer open={openMenu}>
            
            <Menu>
                <Li><Link href="#sobreMim">Sobre Mim</Link></Li>
                <Li><Link href="#projetos">Projetos</Link></Li>
                <Li><Link href="#conhecimentos">Conhecimentos</Link></Li>
                <Li><Link href="#contato">Contato</Link></Li>
            </Menu>
        </MenuContainer>
    );
}
 
export default MenuLateral;