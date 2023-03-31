import styled from "styled-components";

export const StyledContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    gap: 2rem;
    margin-top: 1rem;
    padding: 0 1rem 0 1rem;
    .icons {
        color: ${({theme}) => theme.colors.white};
    }
    @media (max-width: 500px){
        display: none;
    }
`