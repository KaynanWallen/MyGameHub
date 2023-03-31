import Game1 from '../assets/Game1.jpg';
import Game2 from '../assets/Game2.jpg';
import Game3 from '../assets/Game3.jpg';

import Avatar1 from '../assets/Avatar1.png';
import Avatar2 from '../assets/Avatar2.png';
import Avatar3 from '../assets/Avatar3.png';

export interface iGame {
    image: string;
    name: string;
    category: string;
    installed: boolean;
}

export interface iUser {
    image: string;
    name: string;
    online: boolean;
}

export const gameData: iGame[] = [
    {
        image: Game1,
        name: 'Jogo 1',
        category: 'RPG',
        installed: true,
    },
    {
        image: Game2,
        name: 'Jogo 2',
        category: 'FPS',
        installed: true,
    },
    {
        image: Game3,
        name: 'Jogo 3',
        category: 'Adventure',
        installed: false,
    },
    {
        image: Game1,
        name: 'Jogo 1',
        category: 'RPG',
        installed: false,
    },
    {
        image: Game2,
        name: 'Jogo 2',
        category: 'FPS',
        installed: false,
    },
    {
        image: Game3,
        name: 'Jogo 3',
        category: 'Adventure',
        installed: false,
    },
]

export const userData: iUser[] = [
    {
        image: Avatar1,
        name: 'Jogador 1',
        online: true,
    },
    {
        image: Avatar2,
        name: 'Jogador 2',
        online: true,
    },
    {
        image: Avatar3,
        name: 'Jogador 3',
        online: true,
    },
    {
        image: Avatar1,
        name: 'Jogador 1',
        online: false,
    },
    {
        image: Avatar2,
        name: 'Jogador 2',
        online: false,
    },
    {
        image: Avatar3,
        name: 'Jogador 3',
        online: false,
    },
]