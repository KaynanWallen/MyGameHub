import React from 'react';
import { gameData } from '../../data/database';
import GameCard from './GameCard';
import { StyledGameList } from './style';

const GameList = () => {
    return (
        <StyledGameList>
            {gameData.slice(0, 3).map((game) => (
                <GameCard game = {game} key={game.name}/>
            ))}
        </StyledGameList>
    )
}

export default GameList