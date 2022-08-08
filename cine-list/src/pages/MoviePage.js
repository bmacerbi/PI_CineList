import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie"

const PageFilme = () =>{
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    return(
        <>
            <h2>piru</h2>
        </>
    );
};

export default PageFilme;