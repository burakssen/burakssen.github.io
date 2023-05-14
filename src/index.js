import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Gameoflife from "./pages/Gameoflife.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/gameoflife" element={<Gameoflife/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

