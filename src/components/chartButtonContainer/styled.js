import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    padding-left: 3%;  


    @media(max-width: 820px) {
        height: 50px;    
        width: 90vw;   
        flex-wrap: wrap;
        padding-left: 0%;   
    }

`