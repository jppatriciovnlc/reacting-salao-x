import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} component={Login} />
            </Switch>
        </BrowserRouter>
    )

}