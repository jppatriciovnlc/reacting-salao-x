
import styled  from 'styled-components';

export const Select = styled.select `
   width: ${(props) => props.width? props.width : '100%'};
   height: 40px;
   background-color: #fafafa;
   color: #00acc1;
   font-family: 'roboto';

   &:hover {
    background-color: #00acc1;    
    color: #fafafa;
   }

   
`

export const Option = styled.option `
   
`