import React from 'react';
import * as S from './styled';

const ChartButton = (props) => {
     
    console.log(props)

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
export default ChartButton