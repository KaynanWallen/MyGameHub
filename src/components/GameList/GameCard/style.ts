import styled from "styled-components";

export const StyledGameCard = styled.li `
    img{
        border-radius: 30px;
        max-height: 130px;
        max-width: 365px;
    }
    
    h3{
        margin-top: .5rem;
    }
    @media (max-width: 1200px) {
        h3{
            margin-top: 0rem;
        }
    }

  
`