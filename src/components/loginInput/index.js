import React from 'react';
import * as S from './styled';

const LoginInput = (props) => {

     
    
    const handleOnChange = (e) => {
        props.onChange(e.target.value)
        
    }

   

    var placeholder = props.placeholder;

    return(
        <S.Input 
            type={props.type}
            placeholder={placeholder}
            onChange={(e) => handleOnChange(e)}
            height={props.height}
        
        />
    )
   
}
export default LoginInput

