import styled from 'styled-components';

export const Container = styled.div`
    height: 50vh;
    width: 90vw;

    background-color: #faa292;
    padding-top: 3%;
`

export const FormGroup = styled.div `
    display: flex ;
    flex-direction: column;
    min-width: 200px;
    width: ${(props) => props.width? props.width : '45%'};
    padding-left: 1%;
    padding-right: 1%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid red 1px;
`

export const Label = styled.p `
   margin: 0;
   font-size: 12px;
   margin-bottom: 5px;
   color: #0a0a0a;
   font-family: 'roboto';
`