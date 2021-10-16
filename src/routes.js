import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Resumos from "./pages/resumos";
import Agendamentos from "./pages/agendamentos";


export default function Routes(props) {
    return(
        <BrowserRouter>
            <Switch>                
                
                <Route path= '/resumo'>
                    <Resumos props={props}/>
                </Route>
                <Route path= '/agendamento'>
                    <Agendamentos props={props}/>
                </Route>
                <Route path= '/'>
                    <Login props={props}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )

}