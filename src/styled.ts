import styled from "styled-components";

export const StyledApp = styled.div`
    height: 100%;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    .AllContent {
        width: 95%;
        height: 100%;
    }
    .Content {
        height: 90%;
        display: flex;
        flex-direction: row;
    }
    .MainContent {
        width: 70%;
    }
    .Social {
        height: 100%;
        background-color: blue;
        width: 25%;
    }
    .HeaderLeft {
        width: 5%;
        height: 50%;
        background-color: yellow;
    }
    .Socialall {
        width: 25%;
    }
    @media (max-width: 1000px){
        .MainContent {
        width: 100%;
        }
        .Socialall {
        display: none;
    }
    }
    @media (max-width: 500px){
        .AllContent {
            width: 100%;
        }
    }

`