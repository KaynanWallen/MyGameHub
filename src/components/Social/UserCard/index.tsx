import React from 'react';
import { iUser } from '../../../data/database';
import { StyledParagraph } from '../../../styles/typography';
import { StyledUserCard } from './styled';


interface iUserCardProps {
    user: iUser
}
const UserCard = ({user}:iUserCardProps) => {
    return (
        <StyledUserCard>
            <img src={user.image} />
            <div>
                <StyledParagraph><strong>{user.name}</strong></StyledParagraph>
                <StyledParagraph>{user.online === true ? 'online' : 'offline'}</StyledParagraph>
            </div>
        </StyledUserCard>
    )
}

export default UserCard