import React, { useState, useEffect } from 'react';
import * as S from './styled';

const ScheduleGrid = (props) => {

    const [rows, setRows] = useState([]);
   
    useEffect(() => {
        if(props.rows){
            setRows(props.rows)
        } 
    },[props.rows])

    

    
    

    

    return(
        <S.Container>            
            <S.TableContainer>
                <S.Table>
                    <S.Thead>
                        <S.TR>
                            <S.TH>Dia</S.TH>
                            <S.TH>Data</S.TH>
                            <S.TH>Horário</S.TH>
                            <S.TH>Cliente</S.TH>
                            <S.TH>Serviço</S.TH>
                        </S.TR>                        
                    </S.Thead>
                    <S.Tbody>
                        {                            
                            rows.map((mod, index) => {
                                
                                return(
                                    <S.TR key={index}>
                                        <S.TD>{mod.day}</S.TD>
                                        <S.TD>{`${mod.date.getDate()}/${mod.date.getMonth() +1}/${mod.date.getFullYear()}`}</S.TD>
                                        <S.TD>{mod.time}</S.TD>
                                        <S.TD>{mod.client}</S.TD>
                                        <S.TD>{mod.service}</S.TD>
                                    </S.TR>
                                )
                            })
                        }                        
                    </S.Tbody>
                </S.Table>
            </S.TableContainer>
        </S.Container>
    )

}
export default ScheduleGrid