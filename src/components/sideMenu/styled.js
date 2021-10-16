import styled  from 'styled-components';
import {  Link } from "react-router-dom";

export const container = styled.div`
    transition: 0.8s;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 75px;
    right: ${(props => props.toggle? '-200px' : "0")};
    background-color: #030303;
    opacity: 0.95;

    @media(min-width: 900px) {
        display: none;
        
    }
`

export const UL = styled.ul`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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