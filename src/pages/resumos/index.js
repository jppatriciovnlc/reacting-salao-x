import * as S from './styled';
import {  Navbar, LocalLineChart, LocalPieChart, Footer, ChartButtonContainer } from '../../components';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../vars';


const Resumos = (props) => {

    const [pieData, setPieData] = useState([
        { name: 'Podóloga', value: 0 },
        { name: 'Manicure', value: 0 },
    ])

    const context = useContext(AppContext);    

    const data = context.dataMock

    console.log(data.podologaAgendamentos)
    console.log(data.manicureAgendamentos)

    

    console.log(data)

    useEffect(() => {
        var pieData30 = [
            { name: 'Podóloga', value: data.podologaAgendamentos },
            { name: 'Manicure', value: data.manicureAgendamentos },
        ]
        setPieData(pieData30)
    },[])



    const handleClick = (time) => {
        console.log(time)
        var dt = new Date();
        var month = dt.getMonth() + 1;
        var year = dt.getFullYear();
        var daysInMonth = new Date(year, month, 0).getDate();    

        if(time == "7"){            
            let auxPieData7Podologa = 0
            let auxPieData7Manicure = 0

            if(data.podologaAgendamentos){
                data.agendamentos.map((item) => {
                    if((parseInt(item.name) >= (daysInMonth -6))  && (parseInt(item.name) <= (daysInMonth))){
                        auxPieData7Podologa += item.Podologa;
                        auxPieData7Manicure += item.Manicure
                    }
                    return null
                })
                
            }

            var pieData7 = [
                { name: 'Podóloga', value: auxPieData7Podologa },
                { name: 'Manicure', value: auxPieData7Manicure },
            ]
            console.log(pieData7)

            setPieData(pieData7)
        }
        else if(time == "15"){
            let auxPieData15Podologa = 0
            let auxPieData15Manicure = 0

            if(data.podologaAgendamentos){
                data.agendamentos.map((item) => {
                    if((parseInt(item.name) >= (daysInMonth -14))  && (parseInt(item.name) <= (daysInMonth))){
                        auxPieData15Podologa += item.Podologa;
                        auxPieData15Manicure += item.Manicure
                    }
                    return null
                })
                
            }

            var pieData15 = [
                { name: 'Podóloga', value: auxPieData15Podologa },
                { name: 'Manicure', value: auxPieData15Manicure },
            ]

            setPieData(pieData15)
        }
        else if(time == "30"){
            var pieData30 = [
                { name: 'Podóloga', value: data.podologaAgendamentos },
                { name: 'Manicure', value: data.manicureAgendamentos },
            ]
            setPieData(pieData30)
        }


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
                            data={pieData}
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