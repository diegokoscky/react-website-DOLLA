import React from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <IconContext.Provider value={
                {color: '#fff'}
            }>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">dolla</NavLogo>
                        <MobileIcon>
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
                            <NavBtnLink to="/entrar">
                                Entrar
                            </NavBtnLink>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
