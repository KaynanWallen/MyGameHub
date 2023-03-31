import styled from "styled-components";


export const StyledSocial = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    height: 550px;
    width: 100%;
    overflow-y: auto;
    .UsersOffline {
        opacity: 0.5;
    }
    h2 {
        margin-bottom: 2rem;
    }
    h4 {
        margin-bottom: 1rem;
    }
    @media (max-width: 1000px){
        display: none;
    }
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: black;
        border-radius: 12px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background: ${({theme}) => theme.colors.white20};
    }
`