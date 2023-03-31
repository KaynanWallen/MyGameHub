import React from "react";
import { StyledParagraph, Titleh2, Titleh4 } from "../../styles/typography";
import { StyledSocial } from "./styled";
import UserCard from "./UserCard";
import { userData } from "../../data/database";


const Social = () => {
    return (
        <StyledSocial>
            <Titleh2>Social</Titleh2>
            <ul className="UsersOnline">
                <Titleh4>ONLINE</Titleh4>
                {userData.filter((user) => user.online === true).map((user) => (
                    <UserCard user = {user} key={user.name} />
                ))}
            </ul>
            <ul className="UsersOffline">
                <Titleh4>OFFLINE</Titleh4>
                {userData.filter((user) => user.online === false).map((user) => (
                    <UserCard user = {user} key={user.name} />

                ))}
            </ul>
        </StyledSocial>
    )
}

export default Social