import React from 'react';
import * as S from './styled';

const SubmitButton = (props) => {
   

    return(     
        <S.Container
            active={props.active}
        >
            <S.Button
                onClick={() => props.handleClick()}
                active={props.active}
            >
                {props.label}
            </S.Button>
        </S.Container>
    )
   
}
export default SubmitButton