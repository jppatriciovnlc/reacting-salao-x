import styled from 'styled-components';
import DatePicker from 'react-date-picker';

export const StyledDatePicker = styled(DatePicker)`
    //color: green;   // barras + dias da semana
    background-color: #fafafa;

    
    .react-date-picker__wrapper {    
        border: 2px solid #faa292;        //borda picker
    }
    
    .react-date-picker__inputGroup__input {     //campos de data
        min-width: 0.54em;          // largura campos de data
        height: 48px;               // altura picker
        padding: 0 1px;
        border: 0;
        background: none;
        font: inherit;
        box-sizing: content-box;
    }
    
    
    .react-date-picker__button {        //botões
        border: 0;                      
        background: transparent;
        padding: 4px 6px;
    }
    
    .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
    .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
        stroke: #0078d7;
    }

    

    .react-calendar {           //calendario   
        background: white;
        border: 1px solid #a0a096;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
    }
   
    
    .react-calendar__navigation { //calendario header
        height: 44px;
        margin-bottom: 1em;
    }
    .react-calendar__navigation button {  //calendario header
        min-width: 44px;
        background: none;
    }

    
    .react-calendar__navigation button:enabled:hover,       //calendario header
    .react-calendar__navigation button:enabled:focus {
        background-color: #e6e6e6;
    }

    
    .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
    }

    
    .react-calendar__month-view__days__day--weekend {   //sabados e domingos
        color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
    }
    
    .react-calendar__tile {   //dias
        max-width: 100%;
        text-align: center;
        padding: 0.75em 0.5em;
        background: none;
    }    
    
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
    }


    .react-calendar__tile--now {
        background: #ffff76;
    }


    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: #ffffa9;
    }

    
    
    .react-calendar__tile--active {
        background: #006edc;
        color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: #1087ff;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
    }

`