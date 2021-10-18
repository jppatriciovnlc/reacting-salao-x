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

export const Section3 = styled.section`
    height: 80vh;
    width: 95vw;
    border: solid #0a0a0a 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: #030303;
    opacity: 0.95;

    margin-bottom: 3%;

    @media(max-width: 800px) {
        width: 95vw;
        
    }
`

export const GraphContainer = styled.div`
    height: 50vh;
    width: 90vw;

    background-color: #faa292;
    padding-top: 3%;
`

export const GraphContainer2 = styled.div`
    height: 60vh;
    width: 50vw;

    display: flex;
    flex-direction: row;

    background-color: #faa292;

    border: solid 1px blue;
    

    @media(max-width: 820px) {
        width: 90vw;        
        flex-wrap: wrap-reverse;
        align-items: center;
        justify-content: center;
    }
`

export const SectionTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;    
    color: #faa292;
    font-family: 'roboto';   
    word-wrap: break-word;
    text-align: center;
    padding: 0 10% 0 10%;
`