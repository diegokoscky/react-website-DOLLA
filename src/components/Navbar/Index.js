import React from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <IconContext.Provider value={
                {color: '#fff'}
            }>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">dolla</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="sobre">Sobre</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="descobrir">Descobrir</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="servicos">Serviços</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="cadastrar">Cadastrar</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/entrar">
                                Entrar
                            </NavBtnLink>
                        </NavBtn>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
