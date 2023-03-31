import styled, {css} from "styled-components";
export const StyledTitle = styled.div<iStyledParagraph> `
    font-family: "Poppins" , sans-serif;
    font-weight: ${({fontWeight}) => fontWeight};
    ${({fontSize}) => {
        switch(fontSize){
            case "lg": 
                return css `
                    font-size: 44px;

                    @media (max-width: 800px){
                        font-size: 36px;
                    }
                    
                    @media (max-width: 420px){
                        font-size: 32px;
                    }
                `
            case "md":
                return css `
                    font-size: 20px;
                `
            
            case "sm":
                return css `
                    font-size: 16px;
                `
        }
    }}
    color: ${({theme}) => theme.colors.white};
    
`

interface iStyledParagraph{
    opacity?: number;
    fontWeight?: 400 | 700;
    fontSize?: "lg" | "md" | "sm";
}

export const StyledParagraph = styled.p<iStyledParagraph> `
    font-family: "Poppins" , sans-serif;
    font-weight: 400;
    color: ${({theme}) => theme.colors.white};
    strong, b {
        font-weight: 700;
    };

    opacity: ${({opacity}) => opacity ? opacity : 0.5};

    ${({fontSize}) => {
        switch(fontSize){
            case 'lg':
                return css`
                    font-size: 20px;
                `
            case 'md':
                return css`
                    font-size: 16px;
                `

            case 'sm':
                return css`
                    font-size: 14px;
                `
        }
    }}

`
//Estilização extendo os estilos dos titulos vindo do StyledTitle
export const Titleh1 = styled(StyledTitle.withComponent("h1"))`
`
export const Titleh2 = styled(StyledTitle.withComponent("h2"))`
`
export const Titleh3 = styled(StyledTitle.withComponent("h3"))`
`
export const Titleh4 = styled(StyledTitle.withComponent("h4"))`
`
export const Titleh5 = styled(StyledTitle.withComponent("h5"))`
`
export const Titleh6 = styled(StyledTitle.withComponent("h6"))`
`

interface iStyledTag {
    backgroundColor: "blue" | "red";
}

export const StyledTag = styled.span<iStyledTag>`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 400;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding:  0 1.5rem;

    color: ${({theme}) => theme.colors.white};
    border-radius: 6px;
    ${({backgroundColor, theme}) => {
        switch(backgroundColor) {
            case 'blue':
                return css `
                    background: ${({theme}) => theme.colors.blue}
                `
            case 'red':
                return css `
                    background: ${({theme}) => theme.colors.red}
                `
        }
    }}
`