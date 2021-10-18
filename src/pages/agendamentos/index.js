import * as S from './styled';
import {  Navbar, ScheduleForm } from '../../components';
import { useContext } from 'react';
import AppContext from '../../vars';

const Agendamentos = (props) => {

    const context = useContext(AppContext);



    return (
        <>
            <Navbar 
                logged={context.logged}
                active = 'agendamentos'
            />
            <S.Container>
                <S.Section1>
                    <ScheduleForm/>
                </S.Section1>
                <S.Section2>

                </S.Section2>
                
            </S.Container>
        
        </>
    )

}
export default Agendamentos