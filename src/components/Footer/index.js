import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItem,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinksTitle>Nosso App</FooterLinksTitle>
                            <FooterLink to="/sobre">Sobre</FooterLink>
                            <FooterLink to="/descobrir">Descobrir</FooterLink>
                            <FooterLink to="/servicos">Serviços</FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle>Sua Área</FooterLinksTitle>
                            <FooterLink to="/cadastrar">Cadastrar</FooterLink>
                            <FooterLink to="/entrar">Entrar</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinksTitle>Social Media</FooterLinksTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle>Contato</FooterLinksTitle>
                            <FooterLink to="/">Suporte</FooterLink>
                            <FooterLink to="/">Endereços</FooterLink>
                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla {
                            new Date().getFullYear() 
                        } Todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaYoutube/>
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaLinkedinIn />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
