import React, { } from 'react';
import * as S from './styled';

const Select = (props) => {


    var options = props.options    

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }

    return(
        <S.Select width={props.width} onChange={ (e) => handleChange(e) }>
            {options.map((option, i) => {
                return(
                    <S.Option key={i} value = {option.value}>{option.label} </S.Option>
                )
            })}
        </S.Select>
    )
     
}
export default Select