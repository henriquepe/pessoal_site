import styled from 'styled-components';


export const Main = styled.main`
    display: grid;
    width: 100%;
    
    grid-template-columns: 40% 60%;
    background-size: cover;

    @media screen and (max-width: 1390px) {
        & {
            display: flex;
            background: none;
        }
    }

`;

export const ImageAndSocialDiv = styled.div`
    width: 100%;
    margin-left: 157px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1390px) {
        & {
            display: none;
        }
    }

`;

export const ImageDiv = styled.div`
    margin-top: 90px;

    /* p */


    @media screen and (max-width: 1390px) {
        & {
            display: none;
        }
    }
    

`;

export const SocialDiv = styled.div`
    /* p */

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    justify-content: space-around;
    margin-bottom: 35px;
    
    
    
    
    div {
            margin-top: 40px;
            align-items: center;
            
            

            img {
                
                width: 70px;
                height: 70px;
    
                
                
            }

    }

    @media screen and (max-width: 1390px) {
        & {
            display: none;
        }
    }
`;

export const ButtonDiv = styled.div`

    /* p */
    
    display: flex;
    margin-top: 36px;


    a {
        width: 400px;
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
    }
    
    @media screen and (max-width: 1390px) {
        & {
            display: none;
            
        }
    }

`;


export const DescriptionDiv = styled.div`
    width: 100%;
    background-color: rgba(0,0, 0, 0.5);
    opacity: 0.7;
    font-size: 24px;
    line-height: 44px;
    
    article {
        text-align: center;
        padding: 34px 20px 32px 20px;
        color: #FFF;
        width: 100%;


        p {
            margin-bottom: 30px;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 24px auto;

            @media screen and (max-width: 500px) {
                 & {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    
                    img {
                        padding-top: 30px;
                    }
                    
                }

            }

            
        }

        

    }

    @media screen and (max-width: 1390px) {
        & {
            display: flex;
            background: none;
        }
    }
    

`;