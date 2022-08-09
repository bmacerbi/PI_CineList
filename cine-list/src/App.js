import React from "react";
import Routes from './Rotas';

import {GlobalProvider} from "./context/GlobalState";

export default function App () {
  return (
    <GlobalProvider>
      <Routes/>
    </GlobalProvider>
  );
}


//https://api.themoviedb.org/3/movie/550?api_key=aaef4efb960f10b9af88cd0e410a1f54