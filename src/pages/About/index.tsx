import React from 'react';
import Header from '../../components/Header';

import perfilImg from '../../assets/perfil.svg';
import linkedinIcon from '../../assets/linkedin-2.svg';
import githubIcon from '../../assets/github-2.svg';
import instagramIcon from '../../assets/instagram-2.svg';

import javascriptIcon from '../../assets/javascriptIcon.svg';
import cssIcon from '../../assets/cssIcon.svg';
import dockerIcon from '../../assets/dockerIcon.svg';
import reactIcon from '../../assets/reactIcon.svg';
import nodeIcon from '../../assets/nodeIcon.svg';

import {Main, ImageAndSocialDiv, DescriptionDiv, SocialDiv, ImageDiv, ButtonDiv} from './style';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
        <Header/>
        <Main>

            <ImageAndSocialDiv>
                <ImageDiv>
                    <img src={perfilImg} alt="Henrique Pires"/>
                </ImageDiv>
                <SocialDiv>
                    <div>
                        <a href="https://www.linkedin.com/in/henrique-pires-espindola-79b460131/">
                            <img src={linkedinIcon} alt="LinkedIn"/>
                        </a>
                    </div>

                    <div>

                        <a href="https://github.com/henriquepe/">
                            <img src={githubIcon} alt="Github"/>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/codinglikeadev/?hl=pt-br">
                            <img src={instagramIcon} alt="Instagram"/>
                        </a>
                    </div>
                </SocialDiv>
                <ButtonDiv>
                    <Link to="/portfolio">Mais sobre o meu trabalho</Link>
                </ButtonDiv>
                
            </ImageAndSocialDiv>

            <DescriptionDiv>
                <article>
                    <strong>Nome</strong> <p>Henrique Pires Espindola</p>
                    <strong>Idade</strong> <p>21 anos</p>

                    <strong>Descrição</strong>
                    <p>
                    Sou desenvolvedor de software à 4 anos, gosto de música em estilo leve, suave, bom pra pensar. Amo café, meu parceiro em qualquer código.

                    Em meu trabalho busco sempre agregar valor às aplicações que irão resolver os problemas dos meus clientes, busco sempre a perfeita combinação de eficiência e eficácia, ou seja, entregar o trabalho da forma que foi solicitado e com os recursos necessários, nem a mais, nem a menos.
                    </p>

                    <strong>Tecnologias em que trabalho</strong>
                    <div>
                        <img src={javascriptIcon} alt="Javascript"/>
                        <img src={cssIcon} alt="Javascript"/>
                        <img src={dockerIcon} alt="Javascript"/>
                        <img src={reactIcon} alt="Javascript"/>
                        <img src={nodeIcon} alt="Javascript"/>
                    </div>
                </article>
            </DescriptionDiv>

        </Main>
        
        </>
    )
}

export default About;