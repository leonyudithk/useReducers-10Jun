import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../componets/Login';
import { AuthContext } from '../context/authContext';
import { AuthReducers } from '../reducers/AuthReducers';
import AppRouter from './AppRouter';
import PrivateRoter from './PrivateRoter';
import PublicRouter from './PublicRouter';

const AuthRouter = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false }
    }

    const [user, dispatch] = useReducer(AuthReducers, {}, init);

    useEffect(() => {
        if (!user) { return localStorage.setItem('user', JSON.stringify(user)) }
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRouter>
                             <Login /> 
                         </PublicRouter>
                    } />
                    <Route path="/*" element={
                        <PrivateRoter>
                            <AppRouter />
                        </PrivateRoter>
                    } />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default AuthRouter;