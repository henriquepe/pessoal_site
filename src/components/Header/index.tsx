import React from 'react';
import tagImg from '../../assets/tag.svg';

import { Link } from 'react-router-dom';

import {HeaderDiv, ImageDiv, ListMenu} from './style';

function Header() {
    return (
        <HeaderDiv>
            <ImageDiv>
                <Link to='/'>
                    <img src={tagImg} alt="Tag HTML"/>
                    Coding ON Saucer    
                </Link>
            </ImageDiv>
            <ListMenu>
                <ul>
                    <li><Link to="/portfolio"> Portfólio</Link></li>
                    <li><Link to="/about"> Sobre</Link></li>
                    <li><Link to="/contact"> Contato</Link></li>
                </ul>

            </ListMenu>
        </HeaderDiv>
    )
}

export default Header;