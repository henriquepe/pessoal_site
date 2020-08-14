import styled from 'styled-components';


export const RepoItemDiv = styled.a`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-left: 50px;
    width: 85%;
    margin-bottom: 20px;
    height: 200px;
    border-radius: 15px;
    background-color: #FFF;
    cursor: pointer;
    transition: transform 0.2s;
    text-decoration: none;
    font-family: 'Source Code Pro', monospace;

    @media screen and (max-width: 500px) {
        margin: 40px auto;
    }

    strong {
            font-size: 26px;
            color: #000;
            
        }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;

    

        a {
            font-size: 22px;
            width: 100%;
            text-decoration: none;
            color: #18214C;

            

            img {
                width: 60px;
                height: 60px;
                transition: transform 0.8s;

                &:hover {
                    transform: rotate(360deg);
                }
            }
            

        }

    }
    
    

   

    &:hover {
        transform: translateY(-10px);
    }




`;