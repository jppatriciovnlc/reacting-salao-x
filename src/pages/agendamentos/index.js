import * as S from './styled';
import {  Navbar, ScheduleForm, SubmitButton, ScheduleGrid } from '../../components';
import React, { useState, useContext, useEffect  } from 'react';
import AppContext from '../../vars';

const Agendamentos = (props) => {

    const [agendamentoSemana, setAgendamentoSemana] = useState([]);
    
    const context = useContext(AppContext);    

    useEffect(() => {
        if(context.dataMock){
            let dt = new Date();
            let auxAgendamentos = []
            context.dataMock.agendamentosDetalhes.map((item) => {
                if(typeof(item.date) === "object"){
                    if((item.date.getDate() >= dt.getDate())  && (item.date.getDate() <= (dt.getDate()+ 6))){
                        auxAgendamentos.push(item)
                    }
                }
                else {
                    console.log(item.date)
                }
                return null
            })
            setAgendamentoSemana(auxAgendamentos)

        }                
    },[context])


    const submitAgenda = (e) => {
        console.log(e)
        context.dataMock.agendamentosDetalhes.push(e)        
        context.dataMock.totalAgendamentos += 1;
        let dayName = e.date.getDate().toString();
        let indexAgendamentos = context.dataMock.agendamentos.findIndex(i => i.name === dayName)
        console.log(dayName)
        console.log(indexAgendamentos)
        if(e.service === "Podóloga"){
            context.dataMock.podologaAgendamentos += 1;
            context.dataMock.agendamentos[indexAgendamentos].Podologa += 1
        }
        else{
            context.dataMock.manicureAgendamentos += 1;
            context.dataMock.agendamentos[indexAgendamentos].Manicure += 1
        }
        let day = e.date.GetDate
        context.setDataMock(context.dataMock)

        console.log(context.dataMock)
    }
    


    return (
        <>
            <Navbar 
                logged={context.logged}
                active = 'agendamentos'
            />
            <S.Container>
                <S.Section1>
                    <S.SectionTitle> Novo Atendimento </S.SectionTitle>
                    <ScheduleForm
                        handleClick ={submitAgenda}
                    />
                    
                </S.Section1>
                <S.Section2>
                    <S.SectionTitle> Agenda da Semana </S.SectionTitle>
                    <ScheduleGrid
                        rows = {agendamentoSemana}
                    />
                </S.Section2>
                
            </S.Container>
        
        </>
    )

}
export default Agendamentos