import React from 'react';
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements'

function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="sobre">
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="descobrir">
                        Descobrir
                    </SidebarLink>
                    <SidebarLink to="servicos">
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="cadastrar">
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

export default Sidebar
