import styled from 'styled-components';

export const Main = styled.main`
    display: grid;
    width: 100%;
    align-items: center;
    
    grid-template-columns: 1fr 2fr;
    

    @media screen and (max-width: 1250px) {
                 & {
                    display: flex;
                    
                }

    }


`;

export const FormDiv = styled.form`



    display: flex;
    flex-direction: column;
    margin: 4rem 15rem 0;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
    padding-left: 50px;

    @media screen and (max-width: 1250px) {
                 & {
                    margin: 4rem auto;
                    margin-top: 2.5rem;
                    padding-left: 0;
                    
                }

    }

    
    width: 70%;
    height: 670px;
    font-family: 'Source Pro Code', monospace;


    label {
        font-family: 'Source Code Pro', monospace;
        font-size: 24px;
        margin-bottom: 13px;
        color: #FFF;
    }

    input {
        width: 100%;
        height: 70px;
        margin-bottom: 44px;
        border-radius: 20px;
        border: 0;
        

        font-size: 18px;
        padding-left: 1.2rem;


        

        
    }

    textarea {

        width: 100%;
        height: 100px;
        margin-bottom: 20px;
        border-radius: 20px;
        border: 0;
        padding-top: 10px;

        font-size: 18px;
        padding-left: 1.2rem;
        padding-right: 1.2rem;

        & + button {
            margin-top: 20px;
            
        }

    }


    button {
        width: 100%;
        height: 70px;
        border: 0;
        border-radius: 20px;
        background: #FFF; 
        text-align: center;
        text-decoration: none;
        font-family: 'Source Code Pro', monospace;
        font-weight: bold;
        color: #000;
        font-size: 24px;
        transition: 0.2s;
        cursor: pointer;
        

        &:hover {
            opacity: 0.6;
        }
    }
    
    



`;

export const ContactDiv = styled.div`

    height: 100%;
    

    img {
        width: 100%;
        margin-left: 79px;
        position: relative;
        top: 7rem;

        @media screen and (min-width: 1251px) and (max-width: 1530px){
            top: 10rem;
        }

    }

    @media screen and (max-width: 1250px) {
                 & {
                    display: none;
                    
                }

    }

`;

