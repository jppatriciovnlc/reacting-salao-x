import * as S from './styled';
import {  Navbar, LocalLineChart, LocalPieChart, Footer } from '../../components';
import { useContext } from 'react';
import AppContext from '../../vars';
import Mock from '../../services/mock'


const Resumos = (props) => {

    const context = useContext(AppContext);

    const data = Mock()

    const pieData = [
        { name: 'Podóloga', value: data.podologaAgendamentos },
        { name: 'Manicure', value: data.manicureAgendamentos },
    ]
    


    return (
        <>
            <Navbar 
                    logged={context.logged}
                    active = 'resumos'
            />
            <S.Container>
                
                <S.Section2>
                    <S.SectionTitle> Agendamento - Últimos 30 dias </S.SectionTitle>
                    <S.GraphContainer>
                        <LocalLineChart
                            data={data.agendamentos}
                        />
                    </S.GraphContainer>
                </S.Section2>

                <S.Section3>
                    <S.SectionTitle> Agendamentos por Serviço - Últimos 30 dias </S.SectionTitle>
                    <S.GraphContainer2>
                        <LocalPieChart
                            data={pieData}
                        />
                    </S.GraphContainer2>
                </S.Section3>
                <Footer/>
                
            </S.Container>
        
        </>
    )

}
export default Resumos