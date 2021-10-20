import React from 'react';
import * as S from './styled';

const ChartButton = (props) => {
   

    return(     
        <S.Container
            active={props.active}
        >
            <S.Button
                onClick={(e) => props.handleClick(e.target.value)}
                active={props.active}
                value={props.value}
            >
                {props.label}
            </S.Button>
        </S.Container>
    )
   
}
export default ChartButton