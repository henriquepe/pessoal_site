import styled from 'styled-components';

export const PortfolioDiv = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
    gap: 20px;
    align-items: center;

    /* 
    
    980px - 1535px 
    grid-template-columns: 50% 50%;
    
    
    */

    /* 
    
    max - 979px
    grid-template-columns: 100%;


    
    */

    @media screen and (max-width: 725px){
        grid-template-columns: 100%;
        gap: 0;
    }
    
    @media screen and (min-width: 726px) and (max-width: 1535px){
        grid-template-columns: 40% 60%;
        gap: 0;
    }

`;

