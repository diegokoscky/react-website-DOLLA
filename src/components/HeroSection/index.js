import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted
                    src={Video}
                    type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Banco Vitural Facilitado</HeroH1>
                <HeroP>Crie sua conta hoje e receba R$ 200 em crédito no seu próximo pagamento.</HeroP>
                <HeroBtnWrapper>
                    <Button to="cadastrar"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                        Começar {
                        hover ? <ArrowForward/>: <ArrowRight/>
                    } </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
