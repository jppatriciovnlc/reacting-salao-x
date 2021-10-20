import styled from 'styled-components';

export const Container = styled.div`
    transition: 0.5s;    
    padding: 5px;
    background-color: ${(props) => props.active? '#181e23' : '#faa292'};
    
    border-radius: 25px;
    border: solid #fff 1px;
    margin-bottom: 10px;

    &:hover {
        transition: 0.5s;
        background-color: #181e23;
    }

    
`


export const Button = styled.button`    
    transition: 0.5s;
    background-color: ${(props) => props.active? '#181e23' : '#faa292'};
    width: 150px;
    height: 35px;
    border-radius: 25px;
    border: solid 1px #fff;

    box-shadow: none;

    color: ${(props) => props.active? '#ffff' : '#181e23'};    ;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'roboto';

    cursor: pointer;

    &:hover {
        transition: 0.5s;
        background-color: #181e23;
        color: #ffff;
    }
    

`