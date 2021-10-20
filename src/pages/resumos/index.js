import * as S from './styled';
import {  Navbar, LocalLineChart, LocalPieChart, Footer, ChartButtonContainer } from '../../components';
import { useContext } from 'react';
import AppContext from '../../vars';


const Resumos = (props) => {

    const context = useContext(AppContext);    

    const data = context.dataMock

    const pieData = [
        { name: 'Podóloga', value: data.podologaAgendamentos },
        { name: 'Manicure', value: data.manicureAgendamentos },
    ]

    const handleClick = (time) => {


    }
    


    return (
        <>
            <Navbar 
                    logged={context.logged}
                    active = 'resumos'
            />
            <S.Container>
                
                <S.Section2>
                    <S.SectionTitle> Agendamento - Mês atual </S.SectionTitle>
                    <S.GraphContainer>
                        <LocalLineChart
                            data={data.agendamentos}
                        />
                    </S.GraphContainer>
                </S.Section2>

                <S.Section3>
                    <S.SectionTitle> Agendamentos por Serviço - Mês atual </S.SectionTitle>
                    <S.GraphContainer2>                        
                        <ChartButtonContainer                                
                            handleClick={handleClick}
                        />
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