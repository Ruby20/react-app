import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StoreNamePicker from "./StoreNamePicker";
import App from "./App";
import NotFound from "./NotFound";
import React from 'react';

const Router = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={StoreNamePicker} />
            <Route path={"/store/:storeId"} component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;