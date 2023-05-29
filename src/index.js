import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";

const Sudoku = lazy(() => import('./pages/Sudoku.js'));
const Gameoflife = lazy(() => import('./pages/Gameoflife.js'));
const Home = lazy(() => import('./pages/Home.js'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route exact path="/" element={
          <Suspense fallback={<div></div>}>
            <Home/>
          </Suspense>
        } />
        <Route path="/gameoflife" element={
          <Suspense fallback={<div></div>}>
            <Gameoflife/>
          </Suspense>
        } />
        <Route path="/sudoku" element={
          <Suspense fallback={<div></div>}>
            <Sudoku/>
          </Suspense>
        } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

