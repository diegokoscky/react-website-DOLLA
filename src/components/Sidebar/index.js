import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}
            onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="sobre" onClick={toggle}>
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="descobrir" onClick={toggle}>
                        Descobrir
                    </SidebarLink>
                    <SidebarLink to="servicos" onClick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="cadastrar" onClick={toggle}>
                        Cadastrar
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/entrar">
                        Entrar
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
