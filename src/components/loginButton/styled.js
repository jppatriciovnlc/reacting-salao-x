import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.5s;
    width: 85%;
    padding: 5px;
    background-color: #faa292;
    
    border-radius: 25px;

    &:hover {
        transition: 0.5s;
        background-color: #181e23;
    }
`


export const Button = styled.button`    
    transition: 0.5s;
    background-color: #faa292;
    width: 100%;
    height: 35px;
    border-radius: 25px;
    border: solid 1px #fff;

    box-shadow: none;

    color: #181e23;
    font-size: 16px;
    font-weight: 600;
    font-family: 'roboto';

    cursor: pointer;

    &:hover {
        transition: 0.5s;
        background-color: #181e23;
        color: #ffff;
    }

`