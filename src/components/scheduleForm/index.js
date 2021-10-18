import React, { } from 'react';
import * as S from './styled';
import {  Input, Select } from '../../components';

const ScheduleForm = (props) => {

    return(
        <S.Container>
            <S.FormGroup>
                <S.Label>Cliente</S.Label>
                <Input/>
            </S.FormGroup>
        </S.Container>
    )

}
export default ScheduleForm