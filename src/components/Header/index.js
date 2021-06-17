import React from 'react';
import { useProvider } from "../../Provider"
import { HeaderContainer, Menu, Li, Lines, Line1, Line2, Line3 } from './styles';


const Header = () => {
    const {openMenu, setOpenMenu } = useProvider();
    const handleOpen = (e) => {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }
    return (
        <HeaderContainer>
            <Menu>
                <Li selected>Sobre Mim</Li>
                <Li>Projetos</Li>
                <Li>Conhecimento</Li>
                <Li>Contato</Li>
            </Menu>
            <Lines  onClick={(e) => handleOpen(e)}>
                <Line1 open={openMenu}/>
                <Line2 open={openMenu}/>
                <Line3 open={openMenu}/>
            </Lines>
        </HeaderContainer>
    );
}
 
export default Header;