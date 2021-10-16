import React from 'react';
import * as S from './styled';

const Input = (props) => {

     
    
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
        
    }

   

    var placeholder = props.placeholder;

    return(
        <S.Input 
            type={props.type}
            placeholder={placeholder}
            onChange={(e) => handleOnChange(e)}
        
        />
    )
   
}
export default Input

