import React, {useState, FormEvent} from 'react';
import Header from '../../components/Header';
import sendEmailApi from '../../services/sendEmailApi';

import contactGuy from '../../assets/contact-guy.png';


import {Main, FormDiv, ContactDiv } from './style';


const Contact = () => {

    const [name, setName] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    async function handleSendEmailWithContactInformations() {
        await sendEmailApi.post('', {
            name,
            from: email,
            celular,
            text: message
        });

        setName('');
        setCelular('');
        setEmail('');
        setMessage('');

    }


    return (
        <>
        <Header/>
        <Main>

            <ContactDiv>
                <img src={contactGuy} alt="Homem que trabalha no computador"/>
            </ContactDiv>


            <FormDiv onSubmit={(e: FormEvent) => { 
                
                e.preventDefault()
                handleSendEmailWithContactInformations();
                
                }
            }>

                <label htmlFor="name">Nome</label>
                <input onChange={(event) => { setName(event.target.value)}} value={name} name='name' type="text" placeholder='Nome completo'/>

                <label htmlFor="celular">Celular</label>
                <input onChange={(event) => { setCelular(event.target.value)}} value={celular} name='celular' type="text" placeholder='DDD + número'/>

                <label htmlFor="email">Email</label>
                <input onChange={(event) => { setEmail(event.target.value)}} value={email} name='email' type="text" placeholder='meuemail@email.com'/>

                <label htmlFor="message">Mensagem</label>
                <textarea onChange={(event) => { setMessage(event.target.value)}} value={message} name='message' placeholder='Digite sua mensagem'/>

                <button type='submit'>Enviar</button>

            </FormDiv>


        </Main>
        </>
    )
}

export default Contact;