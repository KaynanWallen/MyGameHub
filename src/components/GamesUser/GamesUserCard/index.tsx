import React from "react";
import {iGame} from '../../../data/database'
import { StyledParagraph, Titleh3 } from '../../../styles/typography'
import { StyledGamesUserCard } from "./style";
import { StyledButton } from "../../../styles/buttons";

interface GameUserCardProps {
    game: iGame
}

const GameUserCard = ({game}:GameUserCardProps) => {
    return (
        <StyledGamesUserCard>
            <div>
                <img src={game.image} />
                <div className="TitleandClass">
                    <Titleh3 fontSize="md" fontWeight={700}> {game.name} </Titleh3> 
                    <StyledParagraph fontSize='lg'> {game.category}</StyledParagraph>
                </div>
            </div>
            <div className="InstallDiv">
                <p> 25 horas </p>
                <StyledButton buttonSize="md" buttonStyle="outline"> Instalar </StyledButton>
            </div>
        </StyledGamesUserCard>
    )
}

export default GameUserCard