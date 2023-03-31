import React from 'react';
import { StyledSocialMsg } from './styled';
import { StyledParagraph } from '../../styles/typography';

import {MdOutlinePhoneInTalk} from 'react-icons/md'
import { StyledHeaderForm } from '../Header/style';
import {AiOutlineSend} from 'react-icons/ai'

const SocialMsg = () => {
    return (
        <StyledSocialMsg>
            <div>
                <StyledParagraph> This Lorem Person and 8 others </StyledParagraph>
                <MdOutlinePhoneInTalk size= {30} color='white'/>
            </div>
            <div>
                <StyledHeaderForm>
                    <input type="text" name="search" id="search" placeholder='Digite sua mensagem...'/>
                </StyledHeaderForm>
                <button type="submit">
                    <AiOutlineSend  size= {30}/>
                </button>
            </div>
        </StyledSocialMsg>
    )
}

export default SocialMsg