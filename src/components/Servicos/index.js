import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
    ServicosContainer,
    ServicosH1,
    ServicosWrapper,
    ServicosCard,
    ServicosIcon,
    ServicosH2,
    ServicosP
} from './ServicosElements'

const Servicos = () => {
    return (<ServicosContainer id="servicos">
        <ServicosH1>Nossos Serviços</ServicosH1>
        <ServicosWrapper>
            <ServicosCard>
                <ServicosIcon src={Icon1}/>
                <ServicosH2>Reduzir Gastos</ServicosH2>
                <ServicosP>Nós te ajudamos a reduzir custos e gastos, aumentando o seu lucro.</ServicosP>
            </ServicosCard>
            <ServicosCard>
                <ServicosIcon src={Icon2}/>
                <ServicosH2>Agências Virtuais</ServicosH2>
                <ServicosP>Você pode acessar nossa plataforma online de onde estiver.</ServicosP>
            </ServicosCard>
            <ServicosCard>
                <ServicosIcon src={Icon3}/>
                <ServicosH2>Benefícios Premium</ServicosH2>
                <ServicosP>Desbloqueie nosso cartão especial de membros e ganhe 5% de cashback.</ServicosP>
            </ServicosCard>
        </ServicosWrapper>
    </ServicosContainer>)
}

export default Servicos
