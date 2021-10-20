import React from 'react';
import { useState } from 'react';
import * as S from './styled';
import { ChartButton } from '../index'

const ChartButtonContainer = (props) => {
     
    const [active, setActive] = useState('30');

    if((props.active !== active)  && (props.active !== undefined)){        
        setActive(props.active)
    }
 
    return(     
        <S.Container>
            <S.label1>Podóloga: {props.data?props.data[0].value:0}</S.label1>
            <S.label2>Manicure: {props.data?props.data[1].value:0}</S.label2>
            <S.label1></S.label1>
            <ChartButton
                label="Últimos 7 dias"
                handleClick={props.handleClick}
                value='7'
                active={active === '7'? true : false}
            />
            <ChartButton
                label="Últimos 15 dias"
                handleClick={props.handleClick}
                value='15'
                active={active === '15'? true : false}
            />
            <ChartButton
                label="Último Mês"
                handleClick={props.handleClick}
                value='30'
                active={active === '30'? true : false}
            />
        </S.Container>
    )
   
}
export default ChartButtonContainer