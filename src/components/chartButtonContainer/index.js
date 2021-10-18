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
            <ChartButton
                label="Últimos 7 dias"
                handleClick={props.handleClick}
                active={active === '7'? true : false}
            />
            <ChartButton
                label="Últimos 15 dias"
                handleClick={props.handleClick}
                active={active === '15'? true : false}
            />
            <ChartButton
                label="Últimos 30 dias"
                handleClick={props.handleClick}
                active={active === '30'? true : false}
            />
        </S.Container>
    )
   
}
export default ChartButtonContainer