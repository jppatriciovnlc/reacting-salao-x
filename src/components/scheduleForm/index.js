import React, { useState } from 'react';
import * as S from './styled';
import {  Input, Select, DatePickerInput, SubmitButton, } from '../../components';

const ScheduleForm = (props) => {

    const [ selectedType, setSelectedType] = useState("Podóloga");
    const [ client, setClient] = useState("");
    const [ date, setDate] = useState(new Date());
    const [ hour, setHour] = useState("00");
    const [ minute, setMinute] = useState("00");

    const typesOptions =  [
        {
            label: "Podóloga",
            value: "Podóloga"
        },
        {
            label: "Manicure",
            value: "Manicure"
        }        
    ];

    const weekDay = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',    
    ]

    var hoursOptions = [];

    for(let i = 0; i < 24; i++){
        let aux = {
            label: i.toString().padStart(2, "0"),
            value: i.toString().padStart(2, "0")
        }
        hoursOptions.push(aux);
    }

    var minsOptions = [];

    for(let i = 0; i < 60; i++){
        let aux = {
            label: i.toString().padStart(2, "0"),
            value: i.toString().padStart(2, "0")
        }
        minsOptions.push(aux);
    }


    const handleTypesChange = (e) => {   
        setSelectedType(e);  
    }

    const handleClientChange = (e) => {
        setClient(e)
    }

    const handleDateChange = (e) => {
        setDate(e)
    }

    const handleHourChange = (e) => {
        setHour(e)
    }

    const handleMinChange = (e) => {
        setMinute(e)
    }

    const handleClick = () => {
        props.handleClick(submitValues)
    }

    let submitValues = {
        day: weekDay[date.getDay()],
        client: client,
        date: date,
        time: `${hour}:${minute}`,
        service: selectedType
    }

    

    return(
        <S.Container>
            <S.FormContainer>
                <S.FormGroup
                    width='300px'
                >
                    <S.Label>Cliente</S.Label>
                    <Input
                        placeholder="Nome ou Email"
                        height="50px"
                        onChange={handleClientChange}
                    />
                </S.FormGroup>
                <S.FormGroup
                    width='300px'
                >
                    <S.Label>Serviço</S.Label>
                    <Select                                  
                        onChange={ handleTypesChange }
                        options={typesOptions} 
                    />
                </S.FormGroup>
                <S.FormGroup
                    width='300px'
                >
                    <S.Label>Data</S.Label>
                    <DatePickerInput
                        onChange={handleDateChange}
                    />
                </S.FormGroup>
                <S.FormGroup
                    width='300px'
                >
                    <S.Label>Horário</S.Label>
                    <S.TimeFormGroup>
                        <Select                                  
                            onChange={ handleHourChange }
                            options={hoursOptions} 
                            width='50px'
                        />
                        <Select                                  
                            onChange={ handleMinChange }
                            options={minsOptions} 
                            width='50px'
                        />
                    </S.TimeFormGroup>
                    
                </S.FormGroup>
            </S.FormContainer>
            <SubmitButton
                label="Agendar"
                handleClick={handleClick}
                active={false}
            />
        </S.Container>
    )

}
export default ScheduleForm