import React from 'react';
import Header from '../../components/Header';

import contactGuy from '../../assets/contact-guy.png';


import {Main, FormDiv, ContactDiv } from './style';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
        <Header/>
        <Main>

            <ContactDiv>
                <img src={contactGuy} alt="Homem que trabalha no computador"/>
            </ContactDiv>


            <FormDiv>

                <label htmlFor="name">Nome</label>
                <input name='name' type="text" placeholder='Nome completo'/>

                <label htmlFor="celular">Celular</label>
                <input name='celular' type="text" placeholder='DDD + número'/>

                <label htmlFor="name">Email</label>
                <input name='email' type="text" placeholder='meuemail@email.com'/>

                <button>Enviar</button>

            </FormDiv>


        </Main>
        </>
    )
}

export default Contact;