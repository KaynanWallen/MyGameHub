import styled from "styled-components";

export const StyledBanner = styled.div `
    padding: 1rem 2.5rem;
    border-radius: 32px;
    background: radial-gradient(110.43% 226.41% at 37.76% 26.07%, #535353 0%, #2C2B2B 0.01%, rgba(250, 14, 14, 0) 100%);
    height: 40%;
    margin-bottom: 1rem;
    .flexgrid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .4rem;
        height: 100%;

    }

    h2 {
        margin-top: 1rem;
    }
    .content {
        min-width: 270px; 
            h1 {
                margin-top: 1rem;
            }
    }
    .imageGrid{
        height: 100%;
        img{
            max-width: 100%;
            height: 100%;

        }
    }
    .priceBox {
        margin-top: 3rem;
        display: inline-flex;
        align-items: center;
        background-color: ${({theme}) => theme.colors.white50};
        border-radius: 12px;
        p{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.5rem;
            color: white;
        }
    }

    @media (max-width: 600px) {
        .flexgrid {
            flex-direction: column-reverse;
        }
        
        .content {
            min-height: unset;
            h1 {
                margin-top: .5rem;
            }
        }
        .imageGrid {
            img {
                max-height: 100px;
            }
        }
        
        .priceBox {
            margin-top: 2rem;
        }
    }
    
    @media (max-width: 420px) {
        .imageGrid {
            img {
                max-height: 80px;
            }
        }
        .priceBox {
            width: 100%;
            flex-direction: column;
            button {
                width: 100%;
            }
        }
    }
`