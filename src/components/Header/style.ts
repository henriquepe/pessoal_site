import React from 'react';

import styled  from 'styled-components';


export const HeaderDiv = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 135px;
    background: #FFF;
    



`;

export const ImageDiv = styled.div`
    margin: 22px 96px;

    img {
        &:hover {
            opacity: 0.7;
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

                &:hover {
                    font-weight: bold;
                }
            }

            
        }

    }



`