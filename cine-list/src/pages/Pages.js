import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Catalog from './Catalog'
import MoviePage from './MoviePage'


const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Catalog  />}/>
                <Route exact path="/MoviePage" element={<MoviePage />}/>
            </Routes>
        </Router>
    )
 }
 
 export default Pages;