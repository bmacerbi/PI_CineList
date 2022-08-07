import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                    <Route path="Assistidos" element={<Assistidos />} />
                    <Route path="Interesses" element={<Interesses />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)