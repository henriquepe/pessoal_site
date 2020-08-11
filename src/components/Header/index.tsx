import React from 'react';
import tagImg from '../../assets/tag.svg';

import {HeaderDiv, ImageDiv, ListMenu} from './style';

function Header() {
    return (
        <HeaderDiv>
            <ImageDiv>
                <img src={tagImg} alt="Tag HTML"/>
            </ImageDiv>
            <ListMenu>
                <ul>
                    <li><a href="#"> Portfólio</a></li>
                    <li><a href="#"> Sobre</a></li>
                    <li><a href="#"> Contato</a></li>
                </ul>

            </ListMenu>
        </HeaderDiv>
    )
}

export default Header;