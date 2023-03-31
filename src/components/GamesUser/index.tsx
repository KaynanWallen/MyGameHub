import React from "react";
import { Titleh3 } from "../../styles/typography";
import {MdArrowForward} from 'react-icons/md'
import { StyledGamesUser } from "./style";
import { gameData } from "../../data/database";
import GameUserCard from "./GamesUserCard";
const GameUser = () => {
    return (
        <StyledGamesUser>
            <div className="GameUser-Title">
                <Titleh3> Meus Jogos </Titleh3>
                <MdArrowForward size={30} color = "white"/>
            </div>
            <ul>
            {gameData.filter((game) => game.installed === true).map((game) => (
                <GameUserCard game = {game} key={game.name}/>
            ))}
            </ul>
        </StyledGamesUser>
    )
}

export default GameUser