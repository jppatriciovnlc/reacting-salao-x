import * as S from './styled';
import React, { useState } from 'react';

const DatePickerInput = (props) => {

    const [value, onChange] = useState(new Date());


    const handleOnChange = (e) => {        
        onChange(e)
        props.onChange(e)
        
    }


    return(
        <div>
            <S.StyledDatePicker
            onChange={(e) => handleOnChange(e)}
            value={value}
            />
      </div>
    )

}

export default DatePickerInput