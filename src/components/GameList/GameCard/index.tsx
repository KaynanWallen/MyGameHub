import React from 'react';
import { iGame } from '../../../data/database';
import { StyledParagraph, Titleh3 } from '../../../styles/typography';
import { StyledGameCard } from './style';


interface iGameCardProps {
    game: iGame
}

const GameCard = ({game}:iGameCardProps) => {
    return (
        <StyledGameCard>
            <img src = {game.image} alt = {game.name} />
            <Titleh3 fontSize="md" fontWeight={700}> {game.name} </Titleh3> 
            <StyledParagraph fontSize='lg'> {game.category}</StyledParagraph>
        </StyledGameCard>
    )
}

export default GameCard