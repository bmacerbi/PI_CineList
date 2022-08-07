import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Catalogo from './pages/Catalogo'
import PageFilme from './pages/PageFilme'


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={<Catalogo />}/>
                <Route path="/PageFilme" exact component={PageFilme}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;