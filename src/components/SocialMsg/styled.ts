import styled from "styled-components";

export const StyledSocialMsg = styled.div`
    width: 100%;
    margin: 3rem 2rem;
    height: 25%;
    border-radius: 12px;
    box-shadow: 4px 39px 15px -37px rgba(255,255,255,0.2),-14px -10px 15px -5px rgba(255,255,255,0.2),12px -6px 15px -3px rgba(255,255,255,0.2),-9px 14px 15px -3px rgba(255,255,255,0.2);
    background-color: transparent;

    
    div {
        display: flex;
        justify-content: space-between;
        padding: 2rem 3rem;
        gap: 1rem 2rem;
        input {
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.white};
          border: none;
          background: transparent;
          width: 100%;
          max-width: 373px;

            &::placeholder {
              color: ${({ theme }) => theme.colors.white50};
            }
          } 
        button {
            color: ${({ theme }) => theme.colors.white};
            transition: .4s;
            &:hover{
              color: ${({ theme }) => theme.colors.blue};
            }
          }

          p {
            opacity: 1;
          }
    }
`