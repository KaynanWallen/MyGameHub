import React from 'react';
import { StyledButton } from '../../styles/buttons';
import { StyledParagraph, StyledTag, Titleh2 } from '../../styles/typography';

import Charizard from "../../assets/Charizard.png";
import { StyledBanner } from './styled';

const mainBanner = () => {
    return(
        <StyledBanner>
            <div className="flexgrid">
                <div className="content">
                    <StyledTag backgroundColor='red'> RPG </StyledTag>
                    <Titleh2 fontWeight={400}>Minha PokeDashboard</Titleh2>
                    <div className="priceBox">
                        <StyledParagraph fontSize='md' opacity={1}>
                            <strong>R$299,00</strong>
                        </StyledParagraph>
                        <StyledButton buttonStyle='solid' buttonSize='lg'>
                            Comprar
                        </StyledButton>
                    </div>
                </div>
                <div className="imageGrid">
                    <img src={Charizard} alt="Charizard"/>
                </div>
            </div>
        </StyledBanner>
    )
}

export default mainBanner