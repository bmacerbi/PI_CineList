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

