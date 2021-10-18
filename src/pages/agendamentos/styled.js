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