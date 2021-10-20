import styled from 'styled-components';
import image from '../../assets/imgs/nail-polish-g1ec1fe92a_1920.jpg'

export const Container = styled.div`
    height: auto;
    background-color: #fafafa;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 30%; 
    display: flex;
    flex-direction: column;
    align-items: center;  
    padding-top: 100px;
`

export const Section1 = styled.section`
    height: 70vh;
    width: 95vw;
    border: solid #0a0a0a 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: #030303;
    opacity: 0.95;

    margin-bottom: 1%;

    @media(max-width: 820px) {       
        height: auto;    
        padding-top: 3%;    
    }
`

export const Section2 = styled.section`
    height: 70vh;
    width: 95vw;
    border: solid #0a0a0a 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: #030303;
    opacity: 0.95;

    margin-bottom: 1%;

    
`

export const SectionTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;    
    color: #faa292;
    font-family: 'roboto';   
    word-wrap: break-word;
    text-align: center;
    padding: 0 10% 0 10%;

    @media(max-width: 820px) {       
        margin-bottom:  5%;    
    }
`