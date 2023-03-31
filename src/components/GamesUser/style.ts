import styled from "styled-components";

export const StyledGamesUser = styled.div `
    background-color: ${({theme}) => theme.colors.white20};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 1rem;
    height: 200px;
    .GameUser-Title {
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
    }
    @media (max-width: 600px) {
        height: auto;
    }
`