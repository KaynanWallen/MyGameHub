import styled from "styled-components";

export const StyledGameList = styled.ul `
  display: flex;
  gap: 1.5rem;
  height: 200px;
  margin-top: .5rem;
  overflow-y: hidden;
  li {
    min-width: 365px;
  }
  @media (max-width: 1200px) {
    overflow-x: scroll;
  }

  ::-webkit-scrollbar {
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.red};
  }
`