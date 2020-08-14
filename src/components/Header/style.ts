import React from 'react';

import styled  from 'styled-components';


export const HeaderDiv = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 145px;
    background: #FFF;

    @media screen and (min-width: 375px) and (max-width: 725px) {

        & {
            justify-content: center;

        }
    }
    



`;

export const ImageDiv = styled.div`
    margin: 22px 96px;
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-family: 'Source Code Pro', monospace;
        

        img {
            padding-right: 20px;

            &:hover {
                opacity: 0.7;
            }
        }
    }
    

    



`


export const ListMenu = styled.div`

    margin: 0 96px 0 0;
    

    ul {
        display: flex;

        li {
            margin-right: 45px;
            list-style: none;
            
            
            a {
                font-family: 'Source Code Pro', monospace;
                text-decoration: none;
                font-size: 24px;
                transition:  0.2s;
                color: #000;

                &:hover {
                    font-weight: bold;
                }
            }

            
        }

    }

    @media screen and (min-width: 375px) and (max-width: 725px) {
        & {
            display: none;
        }
    }



`