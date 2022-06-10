import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from '../componets/Counter';
import Home from '../componets/Home';
import NavBars from '../componets/NavBars';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;