import styled from 'styled-components';

import codeImgBackground from '../../assets/code-image.svg';

export const Landing = styled.div`
    display: flex;
    
    

    @media screen and (min-width: 375px) and (max-width: 725px) {
        align-items: center;
        justify-content: center;
    }

`




export const Presentation = styled.div`
    
    flex: 1;

   
`; 



export const TextsContainer = styled.div`

    



    p {
        color: #FFF;
        font-size: 24px;
        line-height: 54px;
        margin: 90px auto auto 96px;

        & + p {
            margin-top: 79px;
            
        }

       
    }

    @media screen and (max-width: 725px) {
            p{
                margin: 90px 20px;
                text-align: center;
            }
            
        }

    @media screen and (min-width: 1600px) and (max-width: 1920px) {

        p {
            color: #FFF;
            font-size: 24px;
            line-height: 54px;
            margin: 70px auto 0 auto;
            text-align: center;
        }
        

        & + p {
            margin-top: 79px;
            
        }
    }


`; 



export const ButtonsContainer = styled.div`
    margin: 70px auto 0 96px;
    display: flex;
    flex-direction: column;

    
    
    

    a {
        width: 90%;
        height: 100px;
        border: 0;
        border-radius: 20px;
        background: #FFF; 
        text-align: center;
        padding-top: 34px; 
        text-decoration: none;
        font-family: 'Source Code Pro', monospace;
        font-weight: bold;
        color: #000;
        font-size: 24px;
        transition: 0.2s;

        &:hover {
            opacity: 0.6;
        }
        

        & + a {
            margin-top: 44px;
        }
    }

    /* div {
        color: #fff;
        font-size: 24;
        width: 100%;
        margin: 80px auto auto 47px; 
        align-items: center; 
        justify-content: center;

        a {
            background: none;
            text-align: center;
            padding-top: 34px; 
            text-decoration: none;
            font-family: 'Source Code Pro', monospace;
            font-weight: bold;
            color: #000;
            font-size: 24px;

            & + a {
                margin-left: 100px;
            }

            img {
                margin-top: 60px;
                width: 90px;
                height: 90px;

                & + img {
                    margin-left: 30px;
                }
            }
        }
    } */

    
    @media screen and (max-width: 725px) {
            & {
                margin: 90px 20px;
                align-items: center;
                justify-content: center;
            }
            
        }
       

    

`;


// <div>
// <a href="#">
//     <img src={linkedinIcon} alt="Linkedin"/>
// </a>
// <a href="">
//     <img src={githubIcon} alt="Github"/>
// </a>   
// <a href="">
//     <img src={instagramIcon} alt="Instagram"/>
// </a>
// </div>


export const ImageSection = styled.div`
   flex-direction: column;
   width: 710px;
   height: 100vh;
   background: url(${codeImgBackground}) no-repeat;
   background-size: cover;

   @media screen and (max-width: 1230px) {
       display: none;
   }


  
    @media  screen and (max-height: 1080px ) {
        &{
        
        width: 710px;
        height: 86.5vh;
        }
    }

    
    


`;

