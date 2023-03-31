import React from "react";
import {MdMenu} from 'react-icons/md';
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {IoTicketOutline} from 'react-icons/io5'
import {BsHandbag} from 'react-icons/bs'
import { StyledContentLeft } from "./styled";

const ContentLeft = () => {
    return (
        <StyledContentLeft>
            
            <MdMenu size={30} className= "icons"/>
            <BiHomeAlt2 size={30} className= "icons"/>
            <AiOutlineHeart size={30} className= "icons"/>
            <IoTicketOutline size={30} className= "icons"/>
            <BsHandbag size={30} className= "icons"/>

        </StyledContentLeft>
    )
}

export default ContentLeft