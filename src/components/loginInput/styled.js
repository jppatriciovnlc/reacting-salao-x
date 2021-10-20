import styled  from 'styled-components';

export const Input = styled.input `
   width: 85%;
   height: ${(props) => props.height? props.height : '50px'};
   background-color: #fafafa;
   color: #0a0a0a;
   font-family: 'roboto';
   padding-left: 2%;

   box-shadow: none;
   border-radius: 8px;
   border: 1px solid #fee3de;

   margin-bottom: 20px;   

   &:focus {
      transition: 0.5s;
      outline: none;      
      border: 1px solid #faa292;
   }

   
`
