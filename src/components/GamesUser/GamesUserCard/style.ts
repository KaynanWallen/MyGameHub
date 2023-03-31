import styled from "styled-components";

export const StyledGamesUserCard = styled.li `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
    div {
        display: inline-flex;
        padding: 0 2rem;
    }
    .TitleandClass {
        padding: 0 2rem;
        flex-direction: column;
    }
    img {
        border-radius: 10px;
        max-width: 100px;
    }
    .InstallDiv {
        display: inline-flex;
        align-items: center;
        p{
            padding: 0 2rem;
            color: white;
        }
    }
    
    @media (max-width: 600px) {
        flex-wrap: wrap;
        .InstallDiv {
            justify-content: space-between;
        }
    }
`