import styled  from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import {  Link } from "react-router-dom";


export const Nav = styled.nav`
    height: 75px;
    width: 100%;
    position: fixed;
    top: 0;

    background-color: #030303;
    opacity: 0.95;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #fff;

`

export const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2%;

    @media(max-width: 800px) {
        padding-left: 10%;
        
    }
   
`

export const Section2 = styled.section`
    
    width: 100%;


    @media(max-width: 800px) {
        display: none;
        
    }
   
`



export const UL = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const LI = styled.li`
    
`

export const StyledLink = styled(Link)`
    transition: 0.6s;    
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;    
    color: #faa292;
    font-family: 'roboto';

    &:hover{
        transition: 0.6s;
        color: #fafafa;
    }
`


export const Section3 = styled.section`
    width: 80px;
    text-align: center;
    cursor: pointer;
    display: none;

    @media(max-width: 800px) {
        display: block;
        
    }
`

export const Icon = styled(TiThMenu)`
    font-size: 2rem;
`
