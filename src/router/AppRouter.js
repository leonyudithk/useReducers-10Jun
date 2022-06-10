import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../componets/Counter';
import Home from '../componets/Home';
import Login from '../componets/Login';
import NavBars from '../componets/NavBars';
import Perfil from '../componets/Perfil';

const AppRouter = () => {
    return (
        <>
        <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;