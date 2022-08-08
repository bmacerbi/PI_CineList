import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Catalog from './pages/Catalog'
import MoviePage from './pages/MoviePage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Catalog />}/>
                <Route exact path="/movie/:id" element={<MoviePage />}/>
                <Route exact path="/SignUp" element={<SignUp />}/>
                <Route exact path="/Login" element={<Login />}/>
            </Routes>
        </Router>
    )
 }
 
 export default Rotas;