import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    width: 90vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    @media(max-width: 820px) {       
        height: auto;
        margin-bottom:  5%;        
    }
`

export const FormContainer = styled.div`
    height: 30vh;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom:  2%; 

    background-color: #faa292;

    @media(max-width: 820px) {       
        height: auto;
        margin-bottom:  5%;        
    }
`

export const FormGroup = styled.div `
    display: flex ;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 120px;
    min-width: 50px;
    width: ${(props) => props.width? props.width : '45%'};
    padding: 1%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid #fafafa 1px;

    background-color: #0a0a0a;
`

export const TimeFormGroup = styled.div `
    display: flex ;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Label = styled.p `
   margin: 0;
   font-size: 1.2rem;
   font-weight: 600;
   margin-bottom: 5%;
   color: #fafafa;
   font-family: 'roboto';
`