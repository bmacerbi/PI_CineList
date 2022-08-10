import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Catalog from './pages/Catalog'
import MoviePage from './pages/MoviePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Watchlist from './pages/Watchlist'
import Watched from './pages/Watched'

export default function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/movie/:id" element={<MoviePage />}/>
                <Route path="/Catalog" element={<Catalog />}/>
                <Route path="/SignUp" element={<SignUp />}/>
                <Route path="/Watchlist" element={<Watchlist />}/>
                <Route path="/Watched" element={<Watched />}/>
            </Routes>     
        </Router>
    )
 }
 