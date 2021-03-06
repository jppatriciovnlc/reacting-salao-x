
import styled from 'styled-components';

export const Container = styled.div`    
    border: solid #faa292 3px;
    border-radius: 10px;

    min-width: 600px;
    height: 70%;
    width: 40%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px) {
        min-width: 300px;
        justify-content: start;
        padding-top: 10%;
        
    }
   

`

export const Login = styled.p`
    font-size: 3.0rem;
    font-weight: 600;
    color: #faa292;
    font-family: 'roboto';
    text-shadow: 1px 1px #0a0a0a;
    margin-bottom: 50px;
`

export const Title = styled.p`
    font-size: 1.7rem;
    font-weight: 600;
    color: #000000;
    font-family: 'roboto';
    margin-bottom: 10px;
`

export const Subtitle = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000;
    font-family: 'roboto';
    margin-bottom: 20px;

    @media(max-width: 800px) {
        margin-bottom: 30%;
        
    }
`