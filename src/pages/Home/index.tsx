import React from 'react';

import codeImgBackground from '../../assets/code-image.svg';

import githubIcon from '../../assets/githubIcon.svg';
import linkedinIcon from '../../assets/linkedinIcon.svg';
import instagramIcon from '../../assets/instagramIcon.svg';


import Header from '../../components/Header/index';

import {Landing, Presentation, TextsContainer, ButtonsContainer, ImageSection} from './style';
import { Link } from 'react-router-dom';


function Home () {

    return (
        <>
        <Header/>
        <Landing>
            <Presentation>
                <TextsContainer>
                    <p>Olá, meu nome é Henrique. <br /> Sou Desenvolvedor FullStack.</p>
                    <p>Experiência com Web, Mobile à 4 anos.</p>
                </TextsContainer>
                <ButtonsContainer>
                    <Link to="/about">Mais sobre mim</Link>
                    <Link to="/portfolio">Mais sobre o meu trabalho</Link>
                    <Link to="/contact">Contato</Link>


                </ButtonsContainer>

            </Presentation>
            <ImageSection>
                
            </ImageSection>
        </Landing>
        </>
    )
}

export default Home;