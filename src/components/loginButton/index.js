import React from 'react';
import * as S from './styled';

const LoginButton = (props) => {
     
    

    return(
        <S.Container>
            <S.Button
            onClick={() => props.handleClick()}
            >
                Entrar
            </S.Button>
        </S.Container>
        
    )
   
}
export default LoginButton
