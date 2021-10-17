import * as S from './styled';
import {  Navbar } from '../../components';
import { useContext } from 'react';
import AppContext from '../../vars';

const Agendamentos = (props) => {

    const context = useContext(AppContext);


    return (
        <>
            <S.Container>
                <Navbar 
                    logged={context.logged}
                    active = 'agendamentos'
                />
                
            </S.Container>
        
        </>
    )

}
export default Agendamentos